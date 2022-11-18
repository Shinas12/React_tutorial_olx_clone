import firebase from "firebase"
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCzpfdNQ-Ah0jZP7CytnyhbnO1-XV9vPrU",
    authDomain: "myproject-c82f6.firebaseapp.com",
    projectId: "myproject-c82f6",
    storageBucket: "myproject-c82f6.appspot.com",
    messagingSenderId: "911597553650",
    appId: "1:911597553650:web:538328efaf142873254d6b",
    measurementId: "G-N4NKG1Y4HC"
  };

  export default firebase.initializeApp(firebaseConfig)