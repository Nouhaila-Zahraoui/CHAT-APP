import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

/*const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "chat-ab746.firebaseapp.com",
  projectId: "chat-ab746",
  storageBucket: "chat-ab746.appspot.com",
  messagingSenderId: "901216368405",
  appId: "1:901216368405:web:8ec942ee51611df5c49b1c",
};
const firebaseConfig = {
  apiKey: "AIzaSyBnu9SfUALLFslYzoDKRAZX__n18950V1o",
  authDomain: "chat-921b1.firebaseapp.com",
  projectId: "chat-921b1",
  storageBucket: "chat-921b1.appspot.com",
  messagingSenderId: "886444184037",
  appId: "1:886444184037:web:c4c61e8224ea5aa401df0c"
};*/

const firebaseConfig = {
  apiKey: "AIzaSyBFAulR-6AhQwTP3o5C_HOIhGelZ7lAXSw",
  authDomain: "winx-13749.firebaseapp.com",
  projectId: "winx-13749",
  storageBucket: "winx-13749.appspot.com",
  messagingSenderId: "426258442160",
  appId: "1:426258442160:web:d398ada76574a7ee51d875"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
