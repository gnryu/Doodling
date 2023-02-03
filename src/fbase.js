import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBpHFrqlVleyqWrvWCHVnZBtijnk2qqcdc",
  authDomain: "doodling-36617.firebaseapp.com",
  projectId: "doodling-36617",
  storageBucket: "doodling-36617.appspot.com",
  messagingSenderId: "347385634616",
  appId: "1:347385634616:web:053277629aae306b282bcd",
  measurementId: "G-F64CM5ZG7M",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { app, auth };
