import { toast } from 'react-toastify';
import s from './LogOut.module.css';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase.js';
import { Loader } from 'components';
import { useState } from 'react';
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
