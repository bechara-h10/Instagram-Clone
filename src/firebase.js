import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBPBGUbZKfpCanlK3aBWEXU6178cHLbPHw",
  authDomain: "instagram-clone-f68dd.firebaseapp.com",
  projectId: "instagram-clone-f68dd",
  storageBucket: "instagram-clone-f68dd.appspot.com",
  messagingSenderId: "918267402601",
  appId: "1:918267402601:web:04aee4aadd1c60af8305f8",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { auth, provider, storage };
export default db;
