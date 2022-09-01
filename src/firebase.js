import { useEffect, useState } from "react";

import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import {useDispatch, useSelector} from "react-redux";

const firebaseConfig = {
    apiKey: "AIzaSyCP8RPNpOdPyCYJKgMX9tIjH7PaypEzE0c",
    authDomain: "auth-development-e823e.firebaseapp.com",
    projectId: "auth-development-e823e",
    storageBucket: "auth-development-e823e.appspot.com",
    messagingSenderId: "447281213211",
    appId: "1:447281213211:web:d88b8d4f72e2e994976dbe"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
}

export function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
}

export function logout() {
    return signOut(auth);
}

// Custom Hook
export function useAuth() {
    const [ currentUser, setCurrentUser ] = useState();
    useEffect(() => {
        const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
        return unsub;
    }, [])
    return currentUser;
}