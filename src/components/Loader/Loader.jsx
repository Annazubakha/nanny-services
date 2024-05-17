import { CircleLoader } from 'react-spinners';

import s from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={s.loader_wrapper}>
      <CircleLoader color="#ffa500" size={150} />
    </div>
  );
};
