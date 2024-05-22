import { useEffect, useState } from 'react';
import s from './NanniesListFavorites.module.css';
import { getUserFavoritesLimited, getUserFavoritesTotal } from '../../api/api';
import { GetUser, NannyItem, Loader } from 'components';
import { toast } from 'react-toastify';

export const NanniesListFavorites = () => {
  const [nanniesFavorites, setNanniesFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [limit, setLimit] = useState(3);
  const [moreNannies, setMoreNannies] = useState(false);
  const [totalNannies, setTotalNannies] = useState(0);

  const userId = GetUser();

  useEffect(() => {
    const fetchFavorites = async () => {
      setMoreNannies(true);
      try {
        const totalNanniesObject = await getUserFavoritesTotal(userId);
        if (totalNanniesObject) {
          const totalNanniesArray = Object.values(totalNanniesObject);
          setTotalNannies(totalNanniesArray.length);
          if (
            totalNanniesArray.length === 0 ||
            totalNanniesArray.length === 3 ||
            totalNanniesArray.length < limit
          ) {
            setMoreNannies(false);

            toast.info(`You have reached the end of nannies' list.`);
          }
        }

        const nanniesFavoritesObject = await getUserFavoritesLimited(
          userId,
          limit
        );

        if (nanniesFavoritesObject) {
          const nanniesFavoritesArray = Object.values(nanniesFavoritesObject);
          setNanniesFavorites(nanniesFavoritesArray);
        } else {
          return;
        }
        setIsLoading(false);
      } catch {
        toast.error(`Something went wrong.`);
      }
    };
    fetchFavorites();
  }, [limit, userId, totalNannies]);

  const loadMore = () => {
    setLimit((prevLimit) => prevLimit + 3);
  };

  return (
    <div className={s.wrapper}>
      <ul className={s.list}>
        {nanniesFavorites.map((nanny) => (
          <NannyItem key={nanny.name} {...nanny} />
        ))}
      </ul>
      {moreNannies && (
        <button className={s.btn_more} onClick={loadMore}>
          Load more
        </button>
      )}
      {nanniesFavorites.length === 0 && !isLoading && (
        <div className={s.text_any}>There are no favorite nannies.</div>
      )}
      {isLoading && <Loader size={450} />}
    </div>
  );
};
