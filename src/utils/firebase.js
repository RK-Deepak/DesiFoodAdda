// Import the functions you need from the SDKs you need
import { getAuth} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhpDNupnYwR7RFadJFVAGYieddt1dpI00",
  authDomain: "desifoodadda-633cc.firebaseapp.com",
  projectId: "desifoodadda-633cc",
  storageBucket: "desifoodadda-633cc.appspot.com",
  messagingSenderId: "1057606065281",
  appId: "1:1057606065281:web:2712803b3628d32327c180",
  measurementId: "G-3NGZ01SXHQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();