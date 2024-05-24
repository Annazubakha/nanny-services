import { useEffect, useState } from 'react';
import { fetchNannies } from '../../api/api';
import { NannyItem } from 'components';
import { toast } from 'react-toastify';
import s from './NanniesList.module.css';

export const NanniesList = ({ setLoading }) => {
  const [nannies, setNannies] = useState([]);
  const [limit, setLimit] = useState(3);
  const [moreNannies, setMoreNannies] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setMoreNannies(true);
      try {
        setLoading(true);
        const nanniesData = await fetchNannies(limit);
        setNannies(nanniesData);
        setLoading(false);
        if (nanniesData.length === 0 || nanniesData.length < limit) {
          setMoreNannies(false);
          toast.info(`You have reached the end of nannies' list.`);
        }
      } catch (error) {
        toast.error(`Something went wrong.`);
      }
    };
    fetchData();
  }, [limit, setLoading]);

  const loadMore = () => {
    setLimit((prevLimit) => prevLimit + 3);
  };

  return (
    <>
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
    </>
  );
};
