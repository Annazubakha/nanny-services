import { auth } from '../firebase/firebase';
import { Navigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';

export const PublicRoute = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const location = useLocation();
  useEffect(() => {
    const listen = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
    return () => {
      listen();
    };
  }, []);

  if (isLoggedIn) {
    <Navigate to={location.state?.from} />;
    return children;
  } else {
    return children;
  }
};
