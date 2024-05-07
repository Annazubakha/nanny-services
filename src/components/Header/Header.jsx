import { Link } from 'react-router-dom';
import s from './Header.module.css';
import { Button, Modal, RegisterForm } from '../../components';
import { useModal } from '../hooks';

export const Header = () => {
  const [isModal, toggleIsModal] = useModal();
  console.log(isModal);

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
              <Button className={s.btn_login} type="button">
                Log In
              </Button>
            </li>
            <li>
              <Button
                className={s.btn_register}
                onClick={toggleIsModal}
                type="button"
              >
                Registration
              </Button>
            </li>
          </ul>
        </div>
      </div>
      {isModal && (
        <Modal title={'Registration'} toggleModal={toggleIsModal}>
          <RegisterForm toggleModal={toggleIsModal} />
        </Modal>
      )}
    </header>
  );
};
