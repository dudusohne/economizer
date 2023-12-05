import { addDoc, collection, getDocs } from 'firebase/firestore'

export class Endpoints {

  //GET methods
  getProducts = (db: any) =>
    getDocs(collection(db, "products"))

  getLists = (db: any) =>
    getDocs(collection(db, "lists"))

  //POST methods
  postNewProduct = (db: any, product: any) => 
    addDoc(collection(db, "products"), product)

  postNewList = (db: any, list: any) => 
    addDoc(collection(db, "lists"), list)
}


export const endpoints = new Endpoints()
