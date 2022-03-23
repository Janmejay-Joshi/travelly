
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// const clientCredentials = {
//   apiKey: process.env.FIREBASE_API_KEY,
//   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.FIREBASE_PROJECT_ID,
//   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.FIREBASE_APP_ID,
//   measurementId: process.env.MEASUREMENT_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyCFGhuoUIhGv7d1gMzvc9GKkEeLkTBE7G8",
  authDomain: "travelly-38d74.firebaseapp.com",
  projectId: "travelly-38d74",
  storageBucket: "travelly-38d74.appspot.com",
  messagingSenderId: "753010637458",
  appId: "1:753010637458:web:271c89ddfb16e699b7844b",
  measurementId: "G-DGTGS3Z9NG"
};

function initFirebase() {
  if (typeof window !== undefined) {
    initializeApp(firebaseConfig);
    console.log("Firebase has been init successfully");
  }
}

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { initFirebase, auth, db };
