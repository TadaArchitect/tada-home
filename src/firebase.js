import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDnw9YvU_yaFtUvwla4XSgJ1sRLPUDTRzo",
    authDomain: "tada-architect.firebaseapp.com",
    projectId: "tada-architect",
    storageBucket: "tada-architect.appspot.com",
    messagingSenderId: "1031499964805",
    appId: "1:1031499964805:web:f2ce35db1106d80f2764ec",
    measurementId: "G-GDKW815ZGS"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;