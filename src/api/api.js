import { ref, get, child } from 'firebase/database';
import { database } from '../firebase/firebase';
import { toast } from 'react-toastify';

export const fetchNannies = async () => {
  try {
    const snapshot = await get(child(ref(database), '/'));
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      return null;
    }
  } catch (error) {
    toast.error(`Something went wrong.`);
  }
};
