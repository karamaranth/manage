let firebaseConfig = {
    apiKey: "AIzaSyBVjAIn68DDTKq3yEaZvppJAMLV6ebvGwY",
    authDomain: "cloud-73883.firebaseapp.com",
    projectId: "cloud-73883",
    storageBucket: "cloud-73883.appspot.com",
    messagingSenderId: "796334227750",
    appId: "1:796334227750:web:92c988f1348ba04df341e7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();