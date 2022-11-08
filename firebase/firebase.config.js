// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbeVPZRuGUpcq6eUDqEHpRSSGm6OMJE8U",
  authDomain: "fir-project-d1e63.firebaseapp.com",
  projectId: "fir-project-d1e63",
  storageBucket: "fir-project-d1e63.appspot.com",
  messagingSenderId: "53501862281",
  appId: "1:53501862281:web:405abb485f153c52a7c158"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);