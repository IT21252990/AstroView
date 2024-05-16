import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBUfyR8FqFWptKLOJ7E_Tsk7vm8dcKFagc",
  authDomain: "nasa-astroview.firebaseapp.com",
  projectId: "nasa-astroview",
  storageBucket: "nasa-astroview.appspot.com",
  messagingSenderId: "600678283826",
  appId: "1:600678283826:web:ca07d31d3be75e58651a2b",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
