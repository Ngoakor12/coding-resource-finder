const { initializeApp } = require("firebase/app");
const {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  query,
  orderBy,
} = require("firebase/firestore");

const { getCurrentCollectionName } = require("./utils");

const firebaseConfig = {
  apiKey: "AIzaSyC8suQigoEopXl19pXRGrGSUWAAprv9-mg",
  authDomain: "coding-resource-finder.firebaseapp.com",
  projectId: "coding-resource-finder",
  storageBucket: "coding-resource-finder.appspot.com",
  messagingSenderId: "186484380448",
  appId: "1:186484380448:web:0d8db73fca5005ffea7d45",
};

// init firebase
const app = initializeApp(firebaseConfig);

// init db
const db = getFirestore(app);

const resourcesRef = collection(db, getCurrentCollectionName());

const resourcesQuery = query(resourcesRef, orderBy("title", "asc"));

module.exports = { db, resourcesRef, getDocs, addDoc, resourcesQuery };
