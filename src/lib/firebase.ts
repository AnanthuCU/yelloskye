// src/lib/firebase.ts

import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Optional: import other services like Firestore, Storage, etc., if needed
// import { getFirestore } from "firebase/firestore";
// import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCLFkRYtzBbChb84TDiu7daFrE8ehYaJ9A",
  authDomain: "yelloskye-f8262.firebaseapp.com",
  projectId: "yelloskye-f8262",
  storageBucket: "yelloskye-f8262.firebasestorage.app",
  messagingSenderId: "873713946725",
  appId: "1:873713946725:web:f5c745407a441756ef368c",
  measurementId: "G-2091MQGPQC"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
// Optional: initialize analytics only on the client side
// let analytics;
// if (typeof window !== "undefined") {
//   isSupported().then((yes) => {
//     if (yes) analytics = getAnalytics(app);
//   });
// }

export { app, auth };
