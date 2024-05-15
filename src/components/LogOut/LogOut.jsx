import { toast } from 'react-toastify';
import s from './LogOut.module.css';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase.js';

export const LogOut = ({ toggleModal }) => {
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        toggleModal();
        toast.success(`Log out successful.`);
      })
      .catch(() => {
        toast.error('Something went wrong. Please try again.');
      });
  };

  return (
    <div className={s.wrapper}>
      <p className={s.description}>Are you sure that you want to log out?</p>
      <button onClick={handleLogout} className={s.btn_submit}>
        Log out
      </button>
    </div>
  );
};
