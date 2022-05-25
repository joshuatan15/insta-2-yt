// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEnEp3RqrtLuttMZIhCdr6iE6GkDTc-UI",
  authDomain: "insta-2-yt-cafa2.firebaseapp.com",
  projectId: "insta-2-yt-cafa2",
  storageBucket: "insta-2-yt-cafa2.appspot.com",
  messagingSenderId: "411713421696",
  appId: "1:411713421696:web:0b56830f019547433cc165"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };