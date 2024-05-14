import { Link, useLocation } from 'react-router-dom';
import s from './Header.module.css';
import { Modal, RegisterForm, LoginForm } from '../../components';
import { useModal } from '../hooks';

export const Header = () => {
  const [isModalRegister, toggleIsModalRegister] = useModal();
  const [isModalLogin, toggleIsModalLogin] = useModal();
  const location = useLocation();
  if (location.pathname === '/nannies') {
    return <div className={s.test}>TEST</div>;
  }

  const currentPage = (pathname) => {
    return location.pathname === pathname ? s.current_page : '';
  };
  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <Link className={s.logo} to="/">
          Nanny&#46;Services
        </Link>
        <div className={s.inside_wrapper}>
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
          </ul>
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
        </div>
      </div>
      {isModalRegister && (
        <Modal title="Registration" toggleModal={toggleIsModalRegister}>
          <RegisterForm toggleModal={toggleIsModalRegister} />
        </Modal>
      )}
      {isModalLogin && (
        <Modal title="Log In" toggleModal={toggleIsModalLogin}>
          <LoginForm toggleModal={toggleIsModalLogin} />
        </Modal>
      )}
    </header>
  );
};
