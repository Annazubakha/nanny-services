import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Loader } from '../components';

export const PrivateRoute = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setLoading(false);
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
        toast.info('Please enter to your account to visit this page.');
      }
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }

  return children;
};
