import * as firebase from 'firebase';
import { constants } from 'os';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default};

// Child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// child_changed
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });

//     console.log(expenses)
//   });

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });

//     console.log(expenses);
// });

// database.ref('expenses').push({
//   description: 'water',
//   amount: 20,
//   note: '',
//   createdAt: 75644246
// });

// database.ref('notes').push({
//   title: 'React',
//   body: 'Courses'
// })

// database.ref('notes/-LEBRwvPQt6PqINPx_hj').remove();

// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// }, () => {
//   console.log('Error with data fetching', e);
// });

// setTimeout(() => {
//   database.ref('age').set(29);
// }, 3500);

// setTimeout(() => {
//   database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//   database.ref('age').set(50);
// }, 9500);




// database.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//    const val = snapshot.val();
//    console.log(val);
//   })
//   .catch((e) => {
//     console.log('Error fetching data', 0);
//   });
  
// database.ref().set({
//   name: 'Alex',
//   age: 23,
//   location: {
//     city: 'Paris',
//     state: 'France'
//   },
//   job: {
//     title: 'Web Integrator',
//     company: 'Sublime Skinz'
//   }
// }).then(() => {
//   console.log('Data is saved');
// }).catch((e) => {
//   console.log('This failed.', e);
// });


// database.ref('age').remove()
//   .then(() => {
//     console.log('Data is removed');
//   }).catch((e) => {
//     console.log('This Failed.', e);
//   });

// database.ref().update({
//   name: 'Peter',
//   age: 19,
//   'job/title': 'Front-End Dev',
//   'job/company': 'Altima',
//   isSingle: false,
//   'location/city': 'Lyon'
// }).then(() => {
//   console.log('Data has been Updated');
// }).catch((e) => {
//   console.log('Update Failed.', e);
// });