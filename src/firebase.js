import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD3V99xOm9cE7aXhJkU-uuNHo1Is8MThE0",
    authDomain: "disneypluse-clone.firebaseapp.com",
    projectId: "disneypluse-clone",
    storageBucket: "disneypluse-clone.appspot.com",
    messagingSenderId: "147108504556",
    appId: "1:147108504556:web:9b5eb5d71fb394aed696c9",
    measurementId: "G-DHXTJVXS5L"
};

const firebaseApp = firebase.initializeApp( firebaseConfig );
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;