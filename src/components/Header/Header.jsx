import { Link } from 'react-router-dom';
import s from './Header.module.css';
import { Button } from '../Button/Button';
export const Header = () => {
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
              <Button className={s.btn_register} type="button">
                Registration
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
