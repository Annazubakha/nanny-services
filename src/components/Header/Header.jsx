import { Link } from 'react-router-dom';
import s from './Header.module.css';
import { Button, Modal, RegisterForm, LoginForm } from '../../components';
import { useModal } from '../hooks';

export const Header = () => {
  const [isModalRegister, toggleIsModalRegister] = useModal();
  const [isModalLogin, toggleIsModalLogin] = useModal();
  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <Link className={s.logo} to="/">
          Nanny&#46;Services
        </Link>
        <div className={s.inside_wrapper}>
          <ul className={s.list_pages_links}>
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link to="/nannies">Nannies</Link>
            </li>
          </ul>
          <ul className={s.auth_links}>
            <li>
              <Button
                className={s.btn_login}
                type="button"
                onClick={toggleIsModalLogin}
              >
                Log In
              </Button>
            </li>
            <li>
              <Button
                className={s.btn_register}
                onClick={toggleIsModalRegister}
                type="button"
              >
                Registration
              </Button>
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
