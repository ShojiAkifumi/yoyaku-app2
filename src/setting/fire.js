import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyDKAU88KC-hEhr1VbJfARJbufLTKwgIaqk",
	authDomain: "yoyaku-app.firebaseapp.com",
	projectId: "yoyaku-app",
	storageBucket: "yoyaku-app.appspot.com",
	messagingSenderId: "161908915495",
	appId: "1:161908915495:web:c44d42f3973c6fa66d7d02",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
