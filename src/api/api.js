import { ref, get, query, limitToFirst } from 'firebase/database';
import { database } from '../firebase/firebase';
import { toast } from 'react-toastify';

export const fetchNannies = async () => {
  try {
    const nanniesRef = ref(database, '/');
    const nanniesQuery = query(nanniesRef, limitToFirst(3));
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
