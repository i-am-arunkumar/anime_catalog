import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';


const firebaseConfig = {
  apiKey: "AIzaSyByBAz-Mvh559r2Ebgn2ustxOq4SWYziuE",
  authDomain: "anicat-3ad7d.firebaseapp.com",
  projectId: "anicat-3ad7d",
  databaseURL: "https://anicat-3ad7d-default-rtdb.asia-southeast1.firebasedatabase.app",
  storageBucket: "anicat-3ad7d.appspot.com",
  messagingSenderId: "791969529819",
  appId: "1:791969529819:web:f3927934af3d61c0ef31fe"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getDatabase(app)

export { app, auth, db }

