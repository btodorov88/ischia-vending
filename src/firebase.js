import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

// firebase init
const firebaseConfig = {
    apiKey: "AIzaSyDV73Hu2m-21iPsjY4-oUuka-6Y5r6liuI",
    authDomain: "ischia-vending.firebaseapp.com",
    databaseURL: "https://ischia-vending.firebaseio.com",
    projectId: "ischia-vending",
    storageBucket: "ischia-vending.appspot.com",
    messagingSenderId: "625294209573",
    appId: "1:625294209573:web:79da3e35390cf6db4185cc"
  };
firebase.initializeApp(firebaseConfig)

// utils
const db = firebase.firestore()
const storage = firebase.storage()
const auth = firebase.auth()

// collection references
const usersCollection = db.collection('users')
const vendingItemsCollection = db.collection('vendingItems')

// export utils/refs
export {
  db,
  storage,
  auth,
  usersCollection,
  vendingItemsCollection,
}