import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore'
import { ProductType } from '../types'

export class Endpoints {

  //GET methods
  getProducts = (db: any) =>
    getDocs(collection(db, "products"))

  getProductById = (db: any, id: string) =>
    getDoc(doc(db, "products", id))

  getLists = (db: any) =>
    getDocs(collection(db, "lists"))

  getListById = (db: any, id: string) =>
    getDoc(doc(db, "lists", id))

  //POST methods
  addProduct = (db: any, product: ProductType) => 
    addDoc(collection(db, "products"), product)

  addList = (db: any, list: any) => 
    addDoc(collection(db, "lists"), list)

  //PATCH methods
  updateProduct = (db: any, id: string, product: ProductType) => 
    updateDoc(doc(db, "products", id), product)

  updateList = (db: any, id: string, list: any) => 
    updateDoc(doc(db, "lists", id), list)

  //DELETE methods
  deleteProduct = (db: any, id: string) => 
    deleteDoc(doc(db, "products", id))

  deleteList = (db: any, id: string) => 
    deleteDoc(doc(db, "lists", id))
}

export const endpoints = new Endpoints()
