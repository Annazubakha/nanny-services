import { useState } from 'react';
import { Filters, NanniesListFavorites, Loader } from '../../components';
import s from './Favorites.module.css';
const Favorites = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [filter, setFilter] = useState('A to Z');
  return (
    <>
      {isLoading && <Loader size={25} />}
      <div className={s.wrapper}>
        <Filters setFilter={setFilter} />
        <NanniesListFavorites setLoading={setIsLoading} filter={filter} />
      </div>
    </>
  );
};

export default Favorites;
