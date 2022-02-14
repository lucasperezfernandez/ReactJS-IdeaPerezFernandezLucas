import firebase from 'firebase/app';
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyC3fx7uuh92CYu0jrCdRKoo9Ts0BAQshIw",
    authDomain: "ecommerce-react-geekspot.firebaseapp.com",
    projectId: "ecommerce-react-geekspot",
    storageBucket: "ecommerce-react-geekspot.appspot.com",
    messagingSenderId: "680748750343",
    appId: "1:680748750343:web:f0ff45a8bb8c9b43c8bca2"
};

const app = firebase.initializeApp(firebaseConfig);

export const getFirebase = () => app;

export const getFirestore = () => firebase.firestore(app);
