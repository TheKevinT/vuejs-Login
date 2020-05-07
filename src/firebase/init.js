import firebase from 'firebase'
//import firestore from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDT-uZzkU-NoXcwzgGbHQmlPlkaUYzQjes",
    authDomain: "vuejs-289ce.firebaseapp.com",
    databaseURL: "https://vuejs-289ce.firebaseio.com",
    projectId: "vuejs-289ce",
    storageBucket: "vuejs-289ce.appspot.com",
    messagingSenderId: "798110393644",
    appId: "1:798110393644:web:be0d074f9935fedd08f889"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
//cree fecha de registros
//firebaseApp.firestore().settings({ timestampsInSnapshots: true });

export default firebaseApp.firestore();