import {getAuth} from '@firebase/auth'
import {initializeApp} from '@firebase/app'
import {getFirestore} from 'firebase/firestore'

const firebaseApp = initializeApp({
  apiKey: 'AIzaSyDX7FaQ08Mo1TTPoi3wnncK3Zdfg4NFS4g',
  authDomain: 'hectare-cb91a.firebaseapp.com',
  databaseURL:
    'https://hectare-cb91a-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'hectare-cb91a',
  storageBucket: 'hectare-cb91a.appspot.com',
  messagingSenderId: '819835781964',
  appId: '1:819835781964:web:005f7a33d74797486805e9',
})

const authApp = getAuth(firebaseApp)
const db = getFirestore(firebaseApp)

export {authApp, db}
