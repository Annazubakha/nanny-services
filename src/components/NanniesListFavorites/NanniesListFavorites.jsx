import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { getUserFavoritesLimited, getUserFavoritesTotal } from '../../api/api';
import { GetUser, NannyItem } from 'components';
import s from './NanniesListFavorites.module.css';

export const NanniesListFavorites = ({ setLoading, filter }) => {
  const [nanniesFavorites, setNanniesFavorites] = useState([]);
  const [limit, setLimit] = useState(3);
  const [moreNannies, setMoreNannies] = useState(false);
  const [totalNannies, setTotalNannies] = useState(0);
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const userId = GetUser();

  useEffect(() => {
    const fetchFavorites = async () => {
      setMoreNannies(true);
      try {
        setLoading(true);
        setIsInitialLoading(true);
        const totalNanniesObject = await getUserFavoritesTotal(userId);
        if (totalNanniesObject) {
          const totalNanniesArray = Object.values(totalNanniesObject);
          setTotalNannies(totalNanniesArray.length);
          setIsInitialLoading(false);

          if (
            totalNanniesArray.length === 0 ||
            totalNanniesArray.length === 3 ||
            totalNanniesArray.length < limit
          ) {
            setMoreNannies(false);
            setIsInitialLoading(false);
            toast.info(`You have reached the end of nannies' list.`);
          }
        }

        const nanniesFavoritesObject = await getUserFavoritesLimited(
          userId,
          limit,
          filter
        );
        setLoading(false);
        if (nanniesFavoritesObject) {
          const nanniesFavoritesArray = Object.values(nanniesFavoritesObject);

          if (filter === 'Z to A' || filter === 'Popular') {
            setNanniesFavorites(nanniesFavoritesArray.reverse());
          } else {
            setNanniesFavorites(nanniesFavoritesArray);
          }
        } else {
          return;
        }
      } catch {
        toast.error(`Something went wrong.`);
      }
    };
    fetchFavorites();
  }, [limit, userId, totalNannies, setLoading, filter]);

  const loadMore = (e) => {
    setLimit((prevLimit) => prevLimit + 3);
    e.target.blur();
  };

  const handleRemoveFromFavorites = (name) => {
    setNanniesFavorites((prevNannies) =>
      prevNannies.filter((nanny) => nanny.name !== name)
    );
  };
  return (
    <>
      <div className={s.wrapper}>
        <ul className={s.list}>
          {nanniesFavorites.map((nanny) => (
            <NannyItem
              key={nanny.name}
              {...nanny}
              onRemoveFromFavorites={handleRemoveFromFavorites}
            />
          ))}
        </ul>
        {isInitialLoading && nanniesFavorites.length === 0 && (
          <div className={s.text_any}>There are no favorite nannies.</div>
        )}
        {!isInitialLoading && moreNannies && nanniesFavorites.length !== 0 && (
          <button className={s.btn_more} onClick={loadMore}>
            Load more
          </button>
        )}
      </div>
    </>
  );
};
