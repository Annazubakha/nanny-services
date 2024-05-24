import { useState } from 'react';
import { Filters, NanniesListFavorites, Loader } from '../../components';
import s from './Favorites.module.css';
const Favorites = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      {isLoading && <Loader size={25} />}
      <div className={s.wrapper}>
        <Filters />
        <NanniesListFavorites setLoading={setIsLoading} />
      </div>
    </>
  );
};

export default Favorites;
