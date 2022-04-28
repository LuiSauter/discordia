import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBRl9Ko8bNurNyCfVoHGmXdSLYkWp-bQ-s",
  authDomain: "discordia-c5870.firebaseapp.com",
  projectId: "discordia-c5870",
  storageBucket: "discordia-c5870.appspot.com",
  messagingSenderId: "420428063395",
  appId: "1:420428063395:web:9dd8fc81fc8a1c14605516"
};

const app = initializeApp(firebaseConfig)

const auth = getAuth()
const provider = new GoogleAuthProvider()

export { auth, provider, signInWithPopup }