import { useState } from 'react';
import { Filters, NanniesList, Loader } from '../../components';
import s from './Nannies.module.css';
const Nannies = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      {isLoading && <Loader size={25} />}
      <div className={s.wrapper}>
        <Filters />
        <NanniesList setLoading={setIsLoading} />
      </div>
    </>
  );
};

export default Nannies;
