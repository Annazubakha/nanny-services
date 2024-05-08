import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCw6hXm3GcVJBFjW67VjLwuafAD1vkuu6M',
  authDomain: 'nannyservices-fe436.firebaseapp.com',
  databaseURL:
    'https://nannyservices-fe436-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'nannyservices-fe436',
  storageBucket: 'nannyservices-fe436.appspot.com',
  messagingSenderId: '187689471743',
  appId: '1:187689471743:web:b9093659c94495c27f46ca',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
