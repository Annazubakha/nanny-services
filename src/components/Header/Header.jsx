import { Link, useLocation } from 'react-router-dom';
import s from './Header.module.css';
import {
  Modal,
  RegisterForm,
  LoginForm,
  Icon,
  ModalLogOut,
  LogOut,
} from '../../components';
import { useModal } from '../hooks';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase/firebase';

import { getUserData } from '../../api/api';

export const Header = () => {
  const [isModalRegister, toggleIsModalRegister] = useModal();
  const [isModalLogin, toggleIsModalLogin] = useModal();
  const [isModalLogOut, toggleIsModalLogOut] = useModal();
  const [authUser, setAuthUser] = useState(null);
  const [userName, setUserName] = useState('');
  const location = useLocation();
  const headerNannies = () => {
    return location.pathname === '/' ? s.header : s.header_nannies;
  };

  const currentPage = (pathname) => {
    return location.pathname === pathname ? s.current_page : '';
  };

  useEffect(() => {
    const listen = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setAuthUser(user);
        const userData = await getUserData(user.uid);
        console.log(userData);

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
    <header className={headerNannies()}>
      <div className={s.wrapper}>
        <Link className={s.logo} to="/">
          Nanny&#46;Services
        </Link>
        <ul className={s.list_pages_links}>
          <li className={s.list_pages_link_item}>
            <Link className={currentPage('/')} to="/">
              Home
            </Link>
          </li>
          <li className={s.list_pages_link_item}>
            <Link className={currentPage('/nannies')} to="/nannies">
              Nannies
            </Link>
          </li>
          {(location.pathname === '/nannies' ||
            location.pathname === '/favorites') && (
            <li className={s.list_pages_link_item}>
              <Link className={currentPage('/favorites')} to="/favorites">
                Favorites
              </Link>
            </li>
          )}
        </ul>
        {authUser && (
          <div className={s.user_wrapper}>
            <div className={s.userdetails_wrapper}>
              <div className={s.usericon_wrapper}>
                <Icon id="user" className={s.user_icon} size={24} />
              </div>
              <p className={s.user_name}>{userName}</p>
            </div>
            <button
              className={s.btn_logout}
              type="button"
              onClick={toggleIsModalLogOut}
            >
              Log Out
            </button>
          </div>
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
    </header>
  );
};
