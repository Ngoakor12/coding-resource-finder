// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
const {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  setDoc,
} = require("firebase/firestore");
const { getAllResources } = require("./src/resources");

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8suQigoEopXl19pXRGrGSUWAAprv9-mg",
  authDomain: "coding-resource-finder.firebaseapp.com",
  projectId: "coding-resource-finder",
  storageBucket: "coding-resource-finder.appspot.com",
  messagingSenderId: "186484380448",
  appId: "1:186484380448:web:0d8db73fca5005ffea7d45",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const currentCollectionName = `resources_${
  new Date().getFullYear() + "_" + (new Date().getMonth() + 1)
}`;

const resourcesRef = collection(db, currentCollectionName);

async function getResourcesFromDB() {
  const resources = [];
  const resourcesDocs = await getDocs(resourcesRef);
  resourcesDocs.forEach((doc) => {
    resources.push(doc.data());
  });

  return resources;
}

async function updateResources(resources) {
  console.log("Adding resources...");
  try {
    resources.forEach(async (resource) => {
      await addDoc(resourcesRef, {
        title: resource.title,
        url: resource.url,
        type: resource.type,
      });
    });
    console.log("Resources added successfully :)");
    return;
  } catch (error) {
    console.log("Adding resources failed :(");
    throw error;
  }
}
// async function main() {
// //   const resources = (await getAllResources()).data;
// //   await updateResources(resources);
//   await getResourcesFromDB().then((res) => console.log(res));
// }

// main();
// getResourcesFromDB().then((res) => console.log(res));
// getResourcesFromDB();
