import { useState } from 'react';
import { toast } from 'react-toastify';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase.js';
import { Loader } from 'components';
import s from './LogOut.module.css';
export const LogOut = ({ toggleModal }) => {
  const [isLoading, setIsLoading] = useState(false);
  const handleLogout = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        toggleModal();
        toast.success(`Log out successful.`);
      })
      .catch(() => {
        toast.error('Something went wrong. Please try again.');
      });
    setIsLoading(false);
  };

  return (
    <div className={s.wrapper}>
      <p className={s.description}>Are you sure that you want to log out?</p>
      <button onClick={handleLogout} className={s.btn_submit}>
        Log Out {isLoading && <Loader size={8} classTitle="smallLoader" />}
      </button>
    </div>
  );
};
