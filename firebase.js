import { initializeApp } from "@react-native-firebase/app";
import { getAuth } from "@react-native-firebase/auth";
// import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCgUkIrYWU4MbAp89BkmeZm4C6dDT96T_M",
  authDomain: "billing-baba.firebaseapp.com",
  projectId: "billing-baba",
  storageBucket: "billing-baba.appspot.com",
  messagingSenderId: "893186141142",
  appId: "1:893186141142:web:e1a74ab8f26d22f48ad277",
  measurementId: "G-WP7KYER515",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase services
const auth = getAuth(app);
// const db = getFirestore(app);

export { auth, db };
