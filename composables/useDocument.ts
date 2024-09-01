import {
  doc,
  deleteDoc,
  updateDoc
} from 'firebase/firestore'
import type { CollectionName } from '../types/firebase-types'

const useDocument = async (collection: CollectionName, id: string) => {
  const { firestore } = await useFirebase()
  const docRef = doc(firestore, collection, id)

  const deleteDocument = async () => {
    try {
      const res = await deleteDoc(docRef)
      return res
    } catch (err) {
      console.error(err)
      throw new Error('Could not delete a document')
    }
  }

  const updateDocument = async (updates: any) => {
    try {
      const res = await updateDoc(docRef, updates)
      return res
    } catch (err) {
      console.error(err)
      throw new Error('Could not update a document')
    }
  }

  return {
    deleteDocument,
    updateDocument
  }
}

export default useDocument
