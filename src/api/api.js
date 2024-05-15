import { ref, get, query, limitToFirst } from 'firebase/database';
import { database } from '../firebase/firebase';
import { toast } from 'react-toastify';

export const fetchNannies = async (limit) => {
  try {
    const nanniesRef = ref(database, '/nannies');
    const nanniesQuery = query(nanniesRef, limitToFirst(limit));
    const snapshot = await get(nanniesQuery);
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      return null;
    }
  } catch (error) {
    toast.error(`Something went wrong.`);
  }
};
export const getUserData = async (uid) => {
  const snapshot = await get(ref(database, `users/${uid}`));
  if (snapshot.exists()) {
    console.log(snapshot.val());
    return snapshot.val();
  } else {
    throw new Error('User data not found');
  }
};
