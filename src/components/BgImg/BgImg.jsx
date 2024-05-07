import { DecorationTab } from 'components';
import s from './BgImg.module.css';

export const BgImg = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.insideWrapper}>
        <DecorationTab />
      </div>
    </div>
  );
};
