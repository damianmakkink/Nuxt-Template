import { initializeApp } from 'firebase/app'
import { getFirestore, serverTimestamp } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import { getAnalytics, isSupported } from 'firebase/analytics'
import type { FirebaseOptions } from 'firebase/app'

export default async function useFirebase () {
  const config = useRuntimeConfig()
  const firebaseConfig: FirebaseOptions = {
    apiKey: config.public.firebaseApiKey,
    authDomain: config.public.firebaseAuthDomain,
    projectId: config.public.firebaseProjectId,
    storageBucket: config.public.firebaseStorageBucket,
    messagingSenderId: config.public.firebaseMessagingSenderId,
    appId: config.public.firebaseAppId,
    measurementId: config.public.firebaseMeasurementId
  }

  const firebaseApp = initializeApp(firebaseConfig)
  const firestore = getFirestore(firebaseApp)
  const storage = getStorage(firebaseApp)
  const auth = getAuth(firebaseApp)
  const timestamp = serverTimestamp()

  let analytics
  if (await isSupported()) {
    analytics = getAnalytics(firebaseApp)
  }

  return {
    firestore,
    storage,
    auth,
    timestamp,
    analytics
  }
}
