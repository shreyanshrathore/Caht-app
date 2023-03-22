import { initializeApp } from "@firebase/app";
import { getAuth } from "@firebase/auth";
import { getStorage } from "@firebase/storage";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyApbX-cirO1pWfrw06fIILqglPDNZlotuc",
  authDomain: "chat-2-e87ab.firebaseapp.com",
  projectId: "chat-2-e87ab",
  storageBucket: "chat-2-e87ab.appspot.com",
  messagingSenderId: "719972406832",
  appId: "1:719972406832:web:a14b93139f5cee60bffff5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
