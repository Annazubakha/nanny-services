import {
  Icon,
  Modal,
  RegisterForm,
  LoginForm,
  ModalLogOut,
  LogOut,
} from 'components';
import s from './BurgerMenu.module.css';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { getUserData } from '../../api/api';
import { auth } from '../../firebase/firebase';
import { useModal } from '../hooks';

export const BurgerMenu = ({ handleBurgerClick }) => {
  const [isModalRegister, toggleIsModalRegister] = useModal();
  const [isModalLogin, toggleIsModalLogin] = useModal();
  const [isModalLogOut, toggleIsModalLogOut] = useModal();
  const [authUser, setAuthUser] = useState(null);
  const [userName, setUserName] = useState('');
  const location = useLocation();

  const currentPage = (pathname) => {
    return location.pathname === pathname ? s.current_page : '';
  };

  useEffect(() => {
    const listen = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setAuthUser(user);
        const userData = await getUserData(user.uid);
        setUserName(userData.name);
      } else {
        setAuthUser(null);
        setUserName('');
      }
    });
    return () => {
      listen();
    };
  }, []);
  return (
    <div className={s.wrapper}>
      <button className={s.close_btn} onClick={handleBurgerClick}>
        <Icon id="close-mobile" className={s.close_icon} size={32} />
      </button>
      <div className={s.wrapper1}>
        {authUser && (
          <div className={s.userdetails_wrapper}>
            <div className={s.usericon_wrapper}>
              <Icon id="user" className={s.user_icon} size={24} />
            </div>
            <p className={s.user_name}>{userName}</p>
          </div>
        )}
        <ul className={s.list_pages_links}>
          <li className={s.list_pages_link_item}>
            <Link
              onClick={handleBurgerClick}
              className={currentPage('/')}
              to="/"
            >
              Home
            </Link>
          </li>
          <li className={s.list_pages_link_item}>
            <Link
              onClick={handleBurgerClick}
              className={currentPage('/nannies')}
              to="/nannies"
            >
              Nannies
            </Link>
          </li>
          {(location.pathname === '/nannies' ||
            location.pathname === '/favorites') && (
            <li className={s.list_pages_link_item}>
              <Link
                onClick={handleBurgerClick}
                className={currentPage('/favorites')}
                to="/favorites"
              >
                Favorites
              </Link>
            </li>
          )}
        </ul>
        {authUser && (
          <button
            className={s.btn_logout}
            type="button"
            onClick={toggleIsModalLogOut}
          >
            Log Out
          </button>
        )}
        {!authUser && (
          <ul className={s.auth_links}>
            <li>
              <button
                className={s.btn_login}
                type="button"
                onClick={toggleIsModalLogin}
              >
                Log In
              </button>
            </li>
            <li>
              <button
                className={s.btn_register}
                onClick={toggleIsModalRegister}
                type="button"
              >
                Registration
              </button>
            </li>
          </ul>
        )}
      </div>

      {isModalRegister && (
        <Modal title="Registration" toggleModal={toggleIsModalRegister}>
          <RegisterForm
            toggleModal={toggleIsModalRegister}
            setUserName={setUserName}
          />
        </Modal>
      )}
      {isModalLogin && (
        <Modal title="Log In" toggleModal={toggleIsModalLogin}>
          <LoginForm toggleModal={toggleIsModalLogin} />
        </Modal>
      )}
      {isModalLogOut && (
        <ModalLogOut title="Log out" toggleModal={toggleIsModalLogOut}>
          <LogOut toggleModal={toggleIsModalLogOut} />
        </ModalLogOut>
      )}
    </div>
  );
};
