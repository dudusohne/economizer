import { Firestore, addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore'
import { ListType, ProductType, CategoryType } from '../types'

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

  getCategories = (db: Firestore) =>
    getDocs(collection(db, "categories"))

  getCategoryById = (db: Firestore, id: string) =>
    getDoc(doc(db, "categories", id))

  //POST methods
  addProduct = (db: Firestore, product: ProductType) => 
    addDoc(collection(db, "products"), product)

  addList = (db: Firestore, list: ListType) => 
    addDoc(collection(db, "lists"), list)

  addCategory = (db: Firestore, category: CategoryType) =>
    addDoc(collection(db, "categories"), category)

  //PATCH methods
  updateProduct = (db: Firestore, id: string, product: ProductType) => 
    updateDoc(doc(db, "products", id), product)

  updateList = (db: Firestore, id: string, list: ListType) => 
    updateDoc(doc(db, "lists", id), list)

  updateCategory = (db: Firestore, id: string, category: any) =>
    updateDoc(doc(db, "categories"), category)

  //DELETE methods
  deleteProduct = (db: Firestore, id: string) => 
    deleteDoc(doc(db, "products", id))

  deleteList = (db: Firestore, id: string) => 
    deleteDoc(doc(db, "lists", id))

  deleteCategory = (db: Firestore, id: string) => 
    deleteDoc(doc(db, "categories", id))
}

export const endpoints = new Endpoints()
