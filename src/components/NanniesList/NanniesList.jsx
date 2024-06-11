import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { fetchNannies } from '../../api/api';
import { NannyItem } from 'components';
import s from './NanniesList.module.css';

export const NanniesList = ({ setLoading, filter }) => {
  const [nannies, setNannies] = useState([]);
  const [limit, setLimit] = useState(3);
  const [moreNannies, setMoreNannies] = useState(true);
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setMoreNannies(true);
      try {
        setLoading(true);
        setIsInitialLoading(true);
        const nanniesData = await fetchNannies(limit, filter);
        console.log(filter);
        setNannies(nanniesData);
        setLoading(false);
        setIsInitialLoading(false);
        if (nanniesData.length === 0) {
          setMoreNannies(false);
          toast.info(`There are no matches for your filter.`);
          return;
        }
        if (nanniesData.length < limit) {
          setMoreNannies(false);
          toast.info(`You have reached the end of nannies' list.`);
        }
      } catch (error) {
        setIsInitialLoading(false);
        toast.error(`Something went wrong.`);
      }
    };
    fetchData();
    console.log(filter);
  }, [limit, setLoading, filter]);

  const loadMore = (e) => {
    setLimit((prevLimit) => prevLimit + 3);
    e.target.blur();
  };

  return (
    <>
      <div className={s.wrapper}>
        <ul className={s.list}>
          {nannies?.map((nanny) => (
            <NannyItem key={nanny.name} {...nanny} />
          ))}
        </ul>
        {!isInitialLoading && moreNannies && (
          <button className={s.btn_more} onClick={loadMore}>
            Load more
          </button>
        )}
      </div>
    </>
  );
};
