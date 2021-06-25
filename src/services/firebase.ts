import firebase from 'firebase/app';
import'firebase/auth';
import'firebase/database';


    const firebaseConfig = {
        apiKey: "AIzaSyASsIqIFBb52SH8WnWkrCuxKtYqDyslJr0",
        authDomain: "letmeask-6e2db.firebaseapp.com",
        databaseURL: "https://letmeask-6e2db-default-rtdb.firebaseio.com",
        projectId: "letmeask-6e2db",
        storageBucket: "letmeask-6e2db.appspot.com",
        messagingSenderId: "978030208481",
        appId: "1:978030208481:web:9dded14ccbb3551d929ea0"
      };

  firebase.initializeApp(firebaseConfig);
  //usando global 
export const auth = firebase.auth();
export  const database = firebase.database();