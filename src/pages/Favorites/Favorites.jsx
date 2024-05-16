import { Filters } from '../../components';
import s from './Favorites.module.css';
const Favorites = () => {
  return <div className={s.wrapper}>{<Filters />}</div>;
};

export default Favorites;
