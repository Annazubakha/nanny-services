import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

import 'firebase/database';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyC7HW9UuTvStiHyUKebnG6vYgFnbta-v3g',
  authDomain: 'nanniesservices-71679.firebaseapp.com',
  projectId: 'nanniesservices-71679',
  databaseURL:
    'https://nanniesservices-71679-default-rtdb.europe-west1.firebasedatabase.app',
  storageBucket: 'nanniesservices-71679.appspot.com',
  messagingSenderId: '341576182826',
  appId: '1:341576182826:web:0dc034da1d3826dc85a753',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase();
