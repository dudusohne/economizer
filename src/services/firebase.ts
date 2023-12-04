// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_API_KEY,
  authDomain: import.meta.env.VITE_REACT_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_REACT_PROJECT_ID,
  storageBucket: import.meta.env.VITE_REACT_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_REACT_MESSASING_SENDER_ID,
  appId: import.meta.env.VITE_REACT_APP_ID
};

export const GetFireBaseAdmin = () => {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  return { app, db };
};

