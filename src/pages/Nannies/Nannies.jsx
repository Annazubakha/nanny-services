import { Filters, NanniesList } from '../../components';
import s from './Nannies.module.css';
const Nannies = () => {
  return (
    <div className={s.wrapper}>
      <Filters />
      <NanniesList />
    </div>
  );
};

export default Nannies;
