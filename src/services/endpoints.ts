import { addDoc, collection, doc, getDoc, getDocs } from 'firebase/firestore'

export class Endpoints {

  //GET methods
  getProducts = (db: any) =>
    getDocs(collection(db, "products"))

  getListById = (db: any, id: any) =>
    getDoc(doc(db, "lists", id))

  getLists = (db: any) =>
    getDocs(collection(db, "lists"))

  //POST methods
  postNewProduct = (db: any, product: any) => 
    addDoc(collection(db, "products"), product)

  postNewList = (db: any, list: any) => 
    addDoc(collection(db, "lists"), list)
}


export const endpoints = new Endpoints()
