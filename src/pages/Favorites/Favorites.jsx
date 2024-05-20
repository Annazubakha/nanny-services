import { Filters, NanniesListFavorites } from '../../components';
import s from './Favorites.module.css';
const Favorites = () => {
  return (
    <div className={s.wrapper}>
      <Filters />
      <NanniesListFavorites />
    </div>
  );
};

export default Favorites;
