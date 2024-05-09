import { Icon } from 'components';
import s from './Filters.module.css';

export const Filters = () => {
  return (
    <div className={s.filter_wrapper}>
      <p className={s.text}>Filters</p>
      <button className={s.dropdown_btn}>
        A to Z
        <Icon id="arrow-down" size={20} className={s.icon} />
      </button>
      <ul className={s.dropdown_list}>
        <li className={s.dropdown_list_item}>A to Z</li>
        <li className={s.dropdown_list_item}>Z to A</li>
        <li className={s.dropdown_list_item}>Less than 10$</li>
        <li className={s.dropdown_list_item}>Greater than 10$</li>
        <li className={s.dropdown_list_item}>Popular</li>
        <li className={s.dropdown_list_item}>Not popular</li>
        <li className={s.dropdown_list_item}>Show all</li>
      </ul>
    </div>
  );
};
