import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "chatapp-d90a1.firebaseapp.com",
  projectId: "chatapp-d90a1",
  storageBucket: "chatapp-d90a1.firebasestorage.app",
  messagingSenderId: "21273470542",
  appId: "1:21273470542:web:cc7a6a7a78fed722d8051f"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
