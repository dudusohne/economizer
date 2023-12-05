import {
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import {
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";

export const signInWithGoogle = async (auth: any, db: any) => {
  try {
    const googleProvider = new GoogleAuthProvider();
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user?.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user?.uid,
        name: user?.displayName,
        authProvider: "google",
        email: user?.email,
        photoURL: user?.photoURL || "",
      });
    }
    return { status: true };
  } catch (err) {
    return { status: false, err: err };
  }
};