import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyAuyrJl9cabc_2wRLLayoPXnHdSNjhCBSU",
    authDomain: "facebook-clone-1bbb6.firebaseapp.com",
    databaseURL: "https://facebook-clone-1bbb6.firebaseio.com",
    projectId: "facebook-clone-1bbb6",
    storageBucket: "facebook-clone-1bbb6.appspot.com",
    messagingSenderId: "168426862201",
    appId: "1:168426862201:web:b37ff675c5ce3e618946a8"
  };
  const firebaseApp =firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;