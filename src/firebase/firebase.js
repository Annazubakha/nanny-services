import 'firebase/database';
import { getDatabase } from 'firebase/database';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyC7HW9UuTvStiHyUKebnG6vYgFnbta-v3g',
  authDomain: 'nanniesservices-71679.firebaseapp.com',
  databaseURL:
    'https://nanniesservices-71679-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'nanniesservices-71679',
  storageBucket: 'nanniesservices-71679.appspot.com',
  messagingSenderId: '341576182826',
  appId: '1:341576182826:web:07f2c8f64b34700485a753',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase();
