import * as firebase from 'firebase';
import { constants } from 'os';

const config = {
  apiKey: "AIzaSyBierOHDPm1szsMIaNdkkgc1tVZLAq7Q84",
  authDomain: "expensify-ddb2f.firebaseapp.com",
  databaseURL: "https://expensify-ddb2f.firebaseio.com",
  projectId: "expensify-ddb2f",
  storageBucket: "expensify-ddb2f.appspot.com",
  messagingSenderId: "1024498394465"
};

firebase.initializeApp(config);

const database = firebase.database();

database.ref().on('value', (snapshot) => {
  const val = snapshot.val();
  console.log(`${val.name} is ${val.job.title} at ${val.job.company}`);
});

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