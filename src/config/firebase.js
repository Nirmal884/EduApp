
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyBMiDQFfEs2RxsflBQYY0CcQ7JGP3eQ-MU",
  authDomain: "interview-1ed95.firebaseapp.com",
  projectId: "interview-1ed95",
  storageBucket: "interview-1ed95.appspot.com",
  messagingSenderId: "787620302398",
  appId: "1:787620302398:web:82d4ff34cb534629134b6f"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)