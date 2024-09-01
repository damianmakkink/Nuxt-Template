import {
  collection,
  addDoc,
  setDoc,
  doc
} from 'firebase/firestore'
import type { CollectionName } from '~/types/firebase-types'

const useCollection = async (colRef: CollectionName) => {
  // add a new document
  const addDocument = async (docData: any) => {
    try {
      const { firestore } = await useFirebase()
      const res = await addDoc(collection(firestore, colRef), docData)
      return res
    } catch (err) {
      console.error(err)
      throw new Error('Could not add a document')
    }
  }

  // set a new document (allows for custom doc id)
  const setDocument = async (id: string, docData: any) => {
    try {
      const { firestore } = await useFirebase()
      const res = await setDoc(doc(firestore, colRef, id), docData, { merge: true })
      return res
    } catch (err) {
      console.error(err)
      throw new Error('Could not set a document')
    }
  }

  return {
    addDocument,
    setDocument
  }
}

export default useCollection
