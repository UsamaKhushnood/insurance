import firebase from "firebase/app";
import "firebase/database";

const config = {
	apiKey: "AIzaSyAOhsvwBuVoglDwYjEM4Aa6ilBiP65E8cs",
    authDomain: "nagia-project.firebaseapp.com",
    databaseURL: "https://nagia-project-default-rtdb.firebaseio.com",
    projectId: "nagia-project",
    storageBucket: "nagia-project.appspot.com",
    messagingSenderId: "685103358429",
    appId: "1:685103358429:web:a0155aa44a0cfe78e49634"
}



const db = firebase.initializeApp(config);
export default db;





