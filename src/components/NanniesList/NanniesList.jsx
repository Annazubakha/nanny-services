import { useEffect, useState } from 'react';
import { fetchNannies } from '../../api/api';
import { NannyItem } from '../NannyItem/NannyItem';
import { toast } from 'react-toastify';
import s from './NanniesList.module.css';

export const NanniesList = () => {
  const [nannies, setNannies] = useState([]);
  const [limit, setLimit] = useState(3);
  const [moreNannies, setMoreNannies] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const nanniesData = await fetchNannies(limit);
        setNannies(nanniesData);

        if (nanniesData.length === 0 || nanniesData.length < limit) {
          setMoreNannies(false);

          toast.info(`You have reached the end of nannies' list.`);
        }
      } catch (error) {
        toast.error(`Something went wrong.`);
      }
    };
    fetchData();
  }, [limit]);

  const loadMore = () => {
    setLimit((prevLimit) => prevLimit + 3);
  };

  return (
    <div className={s.wrapper}>
      <ul className={s.list}>
        {nannies?.map((nanny) => (
          <NannyItem key={nanny.name} {...nanny} />
        ))}
      </ul>
      {moreNannies && (
        <button className={s.btn_more} onClick={loadMore}>
          Load more
        </button>
      )}
    </div>
  );
};
