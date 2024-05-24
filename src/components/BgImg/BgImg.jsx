import { DecorationTab } from 'components';
import s from './BgImg.module.css';

export const BgImg = () => {
  return (
    <div className={s.insideWrapper}>
      <div className={s.wrapper} />
      <DecorationTab />
    </div>
  );
};
