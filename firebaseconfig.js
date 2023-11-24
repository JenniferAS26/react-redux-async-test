// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAiXie_JrGEZNUxgTKZRoAlih75DisgQJI',
  authDomain: 'test-auth-8cb90.firebaseapp.com',
  projectId: 'test-auth-8cb90',
  storageBucket: 'test-auth-8cb90.appspot.com',
  messagingSenderId: '1059244225014',
  appId: '1:1059244225014:web:5ab5f838d80222efc817d7',
  measurementId: 'G-CX3BGJEXHF'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)