import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAN621E9HvWdkMPxVgszVU1K40sKhGGw0Y",
  authDomain: "ritu-portfolio.firebaseapp.com",
  projectId: "ritu-portfolio",
  storageBucket: "ritu-portfolio.appspot.com",
  messagingSenderId: "240434500067",
  appId: "1:240434500067:web:73298622fb646be7fc10d6",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();

export { app, db };
