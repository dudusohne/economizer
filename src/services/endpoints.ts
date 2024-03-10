import { Firestore, addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore'
import { ListType, ProductType } from '../types'

export class Endpoints {

  //GET methods
  getProducts = (db: Firestore) =>
    getDocs(collection(db, "products"))

  getProductById = (db: Firestore, id: string) =>
    getDoc(doc(db, "products", id))

  getLists = (db: Firestore) =>
    getDocs(collection(db, "lists"))

  getListById = (db: Firestore, id: string) =>
    getDoc(doc(db, "lists", id))

  //POST methods
  addProduct = (db: Firestore, product: ProductType) => 
    addDoc(collection(db, "products"), product)

  addList = (db: Firestore, list: ListType) => 
    addDoc(collection(db, "lists"), list)

  //PATCH methods
  updateProduct = (db: Firestore, id: string, product: ProductType) => 
    updateDoc(doc(db, "products", id), product)

  updateList = (db: Firestore, id: string, list: ListType) => 
    updateDoc(doc(db, "lists", id), list)

  //DELETE methods
  deleteProduct = (db: Firestore, id: string) => 
    deleteDoc(doc(db, "products", id))

  deleteList = (db: Firestore, id: string) => 
    deleteDoc(doc(db, "lists", id))
}

export const endpoints = new Endpoints()
