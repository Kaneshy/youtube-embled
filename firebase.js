import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyD_Tmf7V2dSrdJ1ycpn1-fVFJ1neplzYOU",
  authDomain: "embled-d5a39.firebaseapp.com",
  projectId: "embled-d5a39",
  storageBucket: "embled-d5a39.appspot.com",
  messagingSenderId: "535327487055",
  appId: "1:535327487055:web:77d788c2e13fba5547663a",
  measurementId: "G-KQCE47R86K"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const provider = new GoogleAuthProvider()

export default app