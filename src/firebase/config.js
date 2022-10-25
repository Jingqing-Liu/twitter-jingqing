import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    getDoc,
    getDocs,
    setDoc,
    addDoc,
    updateDoc,
    arrayUnion,
    arrayRemove,
    serverTimestamp,
    doc,
    onSnapshot,
    query,
    where,
    deleteDoc,
    orderBy,
    limit,
    writeBatch,
    startAt,
    endAt,
    increment,
    collectionGroup,
} from 'firebase/firestore'

import {
    deleteUser,
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    sendEmailVerification,
    sendPasswordResetEmail,
} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBM3z0Lb5zDtOswwVbiW0uyJUoZxqNZsDc",
    authDomain: "twitter-51da0.firebaseapp.com",
    databaseURL: "https://twitter-51da0-default-rtdb.firebaseio.com",
    projectId: "twitter-51da0",
    storageBucket: "twitter-51da0.appspot.com",
    messagingSenderId: "54909140684",
    appId: "1:54909140684:web:37ed0f7fafb7938a574c69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const db = getFirestore(app)
const auth = getAuth(app)

export {
    db,
    collection,
    collectionGroup,
    getDoc,
    getDocs,
    setDoc,
    addDoc,
    updateDoc,
    arrayUnion,
    arrayRemove,
    serverTimestamp,
    doc,
    onSnapshot,
    query,
    where,
    deleteDoc,
    orderBy,
    limit,
    writeBatch,
    startAt,
    endAt,
    increment,
    auth,
    signInWithEmailAndPassword,
    signOut,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    sendEmailVerification,
    sendPasswordResetEmail,
    deleteUser,
}