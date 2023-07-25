// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0ZzZh7gYfNPo-1Kqni_yI53udMP63VYQ",
  authDomain: "task-list-ab103.firebaseapp.com",
  projectId: "task-list-ab103",
  storageBucket: "task-list-ab103.appspot.com",
  messagingSenderId: "956611522540",
  appId: "1:956611522540:web:02338ff23f5790fbb11ac9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);


export { db, auth};
