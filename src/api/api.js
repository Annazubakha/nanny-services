import { ref, get, query, limitToFirst, push, remove } from 'firebase/database';
import { database } from '../firebase/firebase';
import { toast } from 'react-toastify';

export const fetchNannies = async (limit) => {
  try {
    const snapshot = await get(
      query(ref(database, `/nannies`), limitToFirst(limit))
    );
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      return null;
    }
  } catch {
    toast.error(`Something went wrong.`);
  }
};

export const getUserData = async (uid) => {
  try {
    const snapshot = await get(ref(database, `users/${uid}`));
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      return;
    }
  } catch (error) {
    console.log(error.message);
    toast.error(`Something went wrong.`);
  }
};

export const postAppointment = async (appointment) => {
  try {
    await push(ref(database, '/appointments'), { appointment });
  } catch {
    toast.error(`Something went wrong. Please try again.`);
  }
};

export const addToFavorites = async (uid, nanny) => {
  try {
    await push(ref(database, `users/${uid}/favorites`), nanny);
  } catch {
    toast.error(`Something went wrong. Please try again.`);
  }
};
export const removeFromFavorites = async (uid, pushId) => {
  try {
    await remove(ref(database, `users/${uid}/favorites/${pushId}`));
  } catch {
    toast.error(`Something went wrong. Please try again.`);
  }
};

export const getUserFavorites = async (uid) => {
  try {
    const snapshot = await get(ref(database, `users/${uid}/favorites`));
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      return null;
    }
  } catch {
    toast.error(`Something went wrong. Please try again.`);
  }
};

export const getUserFavoritesLimited = async (uid, limit) => {
  try {
    const snapshot = await get(
      query(ref(database, `users/${uid}/favorites`), limitToFirst(limit))
    );
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      return null;
    }
  } catch {
    toast.error(`Something went wrong.`);
  }
};

export const getUserFavoritesTotal = async (uid) => {
  try {
    const snapshot = await get(query(ref(database, `users/${uid}/favorites`)));
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      return null;
    }
  } catch {
    toast.error(`Something went wrong.`);
  }
};
