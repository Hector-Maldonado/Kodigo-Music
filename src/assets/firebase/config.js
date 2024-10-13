// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJRiiaDRATIjX1c2cCHmis9mUUeNVO7Ho",
  authDomain: "auth-app-23fd4.firebaseapp.com",
  projectId: "auth-app-23fd4",
  storageBucket: "auth-app-23fd4.appspot.com",
  messagingSenderId: "623580686046",
  appId: "1:623580686046:web:1a7dfe3db7eb108c04444f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);