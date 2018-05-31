import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBierOHDPm1szsMIaNdkkgc1tVZLAq7Q84",
  authDomain: "expensify-ddb2f.firebaseapp.com",
  databaseURL: "https://expensify-ddb2f.firebaseio.com",
  projectId: "expensify-ddb2f",
  storageBucket: "expensify-ddb2f.appspot.com",
  messagingSenderId: "1024498394465"
};

firebase.initializeApp(config);

firebase.database().ref().set({
  name: 'Alex'
});