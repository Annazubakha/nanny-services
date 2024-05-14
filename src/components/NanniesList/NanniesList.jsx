import { useEffect, useState } from 'react';
import { fetchNannies } from '../../api/api';
import { NannyItem } from '../NannyItem/NannyItem';
import { toast } from 'react-toastify';
import s from './NanniesList.module.css';
export const NanniesList = () => {
  const [nannies, setNannies] = useState([]);

  console.log(nannies);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const nanniesData = await fetchNannies();
        console.log(nanniesData);
        setNannies(nanniesData);
      } catch (error) {
        toast.error(`Something went wrong.`);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={s.wrapper}>
      <ul className={s.list}>
        {nannies?.map((nanny) => (
          <NannyItem key={name} {...nanny} />
        ))}
      </ul>

      <button className={s.btn_more}>Load more</button>
    </div>
  );
};
