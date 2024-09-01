import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  GoogleAuthProvider
} from 'firebase/auth'
import {
  getDoc,
  doc
} from 'firebase/firestore'
import { logEvent } from 'firebase/analytics'
import { ref } from 'vue'
import type { User } from 'firebase/auth'

export const useUserStore = defineStore('user', () => {
  const currentUser = ref<User | null>(null)
  const authIsReady = ref(false)
  const emailVerified = ref(false)

  const setCurrentUser = (payload: User | null) => {
    if (payload) {
      currentUser.value = payload
    } else {
      currentUser.value = null
    }
  }

  const setAuthReady = (payload: boolean) => {
    authIsReady.value = payload
  }

  const setEmailVerified = (payload: boolean) => {
    emailVerified.value = payload
  }

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider()

    try {
      const {
        auth,
        firestore,
        timestamp
      } = await useFirebase()
      const { setDocument } = await useCollection('users')

      const result = await signInWithPopup(auth, provider)
      setCurrentUser(result.user)

      const userDocRef = doc(firestore, 'users', result.user.uid)
      const userDoc = await getDoc(userDocRef)

      // create a new profile document if the user is new
      if (!userDoc.exists()) {
        console.log('Creating a new user profile document with id ', result.user.uid)
        await setDocument(result.user.uid, {
          uid: result.user.uid,
          email: result.user.email,
          displayName: result.user.displayName,
          photoURL: result.user.photoURL,
          createdAt: timestamp,
          lastLogin: timestamp
        })

        return
      }

      // Else, only update the last login time
      console.log('Updating the last login time for doc with id ', result.user.uid)
      const { updateDocument } = await useDocument('users', result.user.uid)
      await updateDocument({
        lastLogin: timestamp
      })
    } catch (error) {
      console.error(error)
      throw new Error('Logging in with Google is currently not possible. Try again later.')
    }
  }

  const signup = async ({ email, password, displayName }) => {
    try {
      const {
        auth,
        analytics
      } = await useFirebase()
      const resAuth = await createUserWithEmailAndPassword(auth, email, password)

      // Set user displayName
      await updateProfile(resAuth.user, { displayName })

      // set updated user
      setCurrentUser(auth.currentUser)

      // log analytics event
      logEvent(analytics, 'sign_up', {
        method: 'E-mail'
      })
    } catch (err) {
      if (err.code === 'auth/email-already-in-use') {
        throw new Error('An account with this email address already exists.')
      } else {
        throw new Error('Creating an account is currently not possible. Try again later.')
      }
    }
  }

  const login = async ({ email, password }) => {
    try {
      const {
        auth,
        analytics
      } = await useFirebase()

      const res = await signInWithEmailAndPassword(auth, email, password)

      setCurrentUser(res.user)
      setEmailVerified(res.user.emailVerified)

      // log analytics event
      logEvent(analytics, 'login', {
        method: 'E-mail'
      })
    } catch (err) {
      console.log(err)
      if (err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password' || err.code === 'auth/invalid-login-credentials') {
        throw new Error('An account with this email address and password combination cannot be found.')
      } else {
        throw new Error('Logging in is currently not possible. Try again later.')
      }
    }
  }

  const logout = async () => {
    const {
      auth,
      analytics
    } = await useFirebase()

    await signOut(auth)

    setCurrentUser(null)
    setEmailVerified(false)

    // log analytics event
    logEvent(analytics, 'logout')
  }

  return {
    currentUser,
    authIsReady,
    emailVerified,
    setCurrentUser,
    setAuthReady,
    setEmailVerified,
    signup,
    signInWithGoogle,
    login,
    logout
  }
}, {
  persist: true
})
