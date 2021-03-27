import firebase from "firebase/app"
import 'firebase/firestore';

let config = {
    apiKey: "AIzaSyDVlflx9oncJTlDTZAIGc75sgXcJxANUrA",
    authDomain: "campaigns-e9f79.firebaseapp.com",
    databaseURL: "https://campaigns-e9f79.firebaseio.com",
    projectId: "campaigns-e9f79",
    storageBucket: "campaigns-e9f79.appspot.com",
    messagingSenderId: "514535655873"
};


// Initalize Firebase.
firebase.initializeApp(config);

// export Firebase.
export default firebase;
