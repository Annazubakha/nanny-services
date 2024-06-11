import { useState } from 'react';
import { Filters, NanniesList, Loader } from '../../components';
import s from './Nannies.module.css';
const Nannies = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [filter, setFilter] = useState('A to Z');
  return (
    <>
      {isLoading && <Loader size={25} />}
      <div className={s.wrapper}>
        <Filters setFilter={setFilter} />
        <NanniesList setLoading={setIsLoading} filter={filter} />
      </div>
    </>
  );
};

export default Nannies;
