import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyBzsUbzl6XKTnoy4WeLF622w3vDIujEvMA",
  authDomain: "chat-auth-2ab75.firebaseapp.com",
  projectId: "chat-auth-2ab75",
  storageBucket: "chat-auth-2ab75.appspot.com",
  messagingSenderId: "747681332178",
  appId: "1:747681332178:web:63cdb91ae39008f332260b",
  measurementId: "G-6S5DTQ14J6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const provider=new GoogleAuthProvider();

export { auth,provider };
export default app;