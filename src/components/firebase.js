import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyA08u9aFaT-YVLEZYoIt9y3Fk8Y9nfg9nQ",
    authDomain: "weavers-wisdom.firebaseapp.com",
    projectId: "weavers-wisdom",
    storageBucket: "weavers-wisdom.firebasestorage.app",
    messagingSenderId: "951755666537",
    appId: "1:951755666537:web:a3696e782dd98fbc639ef8",
    measurementId: "G-6RMNEQG2WH"
  };

  const app=firebase.initializeApp(firebaseConfig);
  export const auth=app.auth();
  export default app;