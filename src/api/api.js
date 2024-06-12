import {
  ref,
  get,
  query,
  limitToFirst,
  push,
  remove,
  orderByChild,
  limitToLast,
  startAt,
  endAt,
} from 'firebase/database';
import { database } from '../firebase/firebase';
import { toast } from 'react-toastify';

export const fetchNannies = async (limit, filter) => {
  try {
    const nanniesRef = ref(database, '/nannies');
    let sortedQuery;
    switch (filter) {
      case 'A to Z':
        sortedQuery = query(
          nanniesRef,
          orderByChild('name'),
          limitToFirst(limit)
        );
        break;
      case 'Z to A':
        sortedQuery = query(
          nanniesRef,
          orderByChild('name'),
          limitToLast(limit)
        );
        break;
      case 'Popular':
        sortedQuery = query(
          nanniesRef,
          orderByChild('rating'),
          limitToLast(limit)
        );
        break;
      case 'Not popular':
        sortedQuery = query(
          nanniesRef,
          orderByChild('rating'),
          limitToFirst(limit)
        );
        break;
      case 'Greater than 10$':
        sortedQuery = query(
          nanniesRef,
          orderByChild('price_per_hour'),
          startAt(10),
          limitToFirst(limit)
        );
        break;
      case 'Less than 10$':
        sortedQuery = query(
          nanniesRef,
          orderByChild('price_per_hour'),
          startAt(0),
          endAt(10),
          limitToFirst(limit)
        );
        break;
      case 'Show all':
        sortedQuery = query(nanniesRef, limitToFirst(limit));
        break;
      default:
        sortedQuery = query(nanniesRef, limitToFirst(limit));
    }
    const snapshot = await get(sortedQuery);

    if (snapshot.exists()) {
      const nannies = [];
      snapshot.forEach((childSnapshot) => {
        nannies.push(childSnapshot.val());
      });
      return nannies;
    } else {
      return null;
    }
  } catch {
    toast.error('Something went wrong.');
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
  } catch {
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

export const getUserFavoritesLimited = async (uid, limit, filter) => {
  try {
    const nanniesRef = ref(database, `users/${uid}/favorites`);
    let sortedQuery;
    switch (filter) {
      case 'A to Z':
        sortedQuery = query(
          nanniesRef,
          orderByChild('name'),
          limitToFirst(limit)
        );
        break;
      case 'Z to A':
        sortedQuery = query(
          nanniesRef,
          orderByChild('name'),
          limitToLast(limit)
        );
        break;
      case 'Popular':
        sortedQuery = query(
          nanniesRef,
          orderByChild('rating'),
          limitToLast(limit)
        );
        break;
      case 'Not popular':
        sortedQuery = query(
          nanniesRef,
          orderByChild('rating'),
          limitToFirst(limit)
        );
        break;
      case 'Greater than 10$':
        sortedQuery = query(
          nanniesRef,
          orderByChild('price_per_hour'),
          startAt(10),
          limitToFirst(limit)
        );
        break;
      case 'Less than 10$':
        sortedQuery = query(
          nanniesRef,
          orderByChild('price_per_hour'),
          startAt(0),
          endAt(10),
          limitToFirst(limit)
        );
        break;
      case 'Show all':
        sortedQuery = query(nanniesRef, limitToFirst(limit));
        break;
      default:
        sortedQuery = query(nanniesRef, limitToFirst(limit));
    }
    const snapshot = await get(sortedQuery);
    if (snapshot.exists()) {
      const nannies = [];
      snapshot.forEach((childSnapshot) => {
        nannies.push(childSnapshot.val());
      });
      return nannies;
    } else {
      return null;
    }
  } catch {
    toast.error('Something went wrong.');
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
