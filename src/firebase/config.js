import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, getDoc, doc, addDoc } from 'firebase/firestore/lite';
import { apiKey } from '../../private';

const firebaseConfig = {
  apiKey,
  authDomain: 'hokey-cooking-site.firebaseapp.com',
  projectId: 'hokey-cooking-site',
  storageBucket: 'hokey-cooking-site.appspot.com',
  messagingSenderId: '566951939392',
  appId: '1:566951939392:web:4b99d62e99dade29f17ea5',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, getDocs, getDoc, doc, addDoc };
