import { BeatLoader } from 'react-spinners';

import s from './Loader.module.css';

export const Loader = ({ size, classTitle }) => {
  return (
    <div
      className={
        classTitle === 'smallLoader' ? s.loaderWrapper : s.loader_wrapper
      }
    >
      <BeatLoader color="#ffa500" height={size} width={size} />
    </div>
  );
};
