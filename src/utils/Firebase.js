import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAgTwZOwH0I01TXBt54TouTj-VZkI8zLGU",
  authDomain: "minimarket-b3244.firebaseapp.com",
  projectId: "minimarket-b3244",
  storageBucket: "minimarket-b3244.appspot.com",
  messagingSenderId: "961888243764",
  appId: "1:961888243764:web:94c7ff6ce7d4721b563a61"
};

export const initFirebase = initializeApp(firebaseConfig);
