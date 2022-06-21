import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import { dbConstants } from '../utils/constants';

const firebaseConfig = {
  apiKey: dbConstants.dbAuthApiKey,
  authDomain: dbConstants.dbAuthAuthDomain,
  projectId: dbConstants.dbAuthProjectId,
  storageBucket: dbConstants.dbAuthStorageBucket,
  messagingSenderId: dbConstants.dbAuthMessagingSenderId,
  appId: dbConstants.dbAuthAppId
};

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export { auth, provider, signInWithPopup, signOut }