import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAQgKsq9nKLkYXFtVxngV0rHF2B4rYoOd8",
    authDomain: "coderhouse-reactjs-1.firebaseapp.com",
    projectId: "coderhouse-reactjs-1",
    storageBucket: "coderhouse-reactjs-1.appspot.com",
    messagingSenderId: "407216632225",
    appId: "1:407216632225:web:3b458ad86b8c7ac7721be0"
};

// Initialize Firebase
initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(<App />)
