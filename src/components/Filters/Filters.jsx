import { Icon } from 'components';
import s from './Filters.module.css';
import { useState } from 'react';

export const Filters = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [filter, setFilter] = useState('A to Z');
  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };
  const closeDropdown = () => {
    setIsOpen(false);
  };
  const handleFilter = (filter) => {
    setFilter(filter);
    setIsOpen(false);
  };
  return (
    <div className={s.filter_wrapper}>
      <p className={s.text}>Filters</p>
      <button className={s.dropdown_btn} onClick={toggleDropdown}>
        {filter}
        <Icon id="arrow-down" size={20} className={s.icon} />
      </button>
      {isOpen && (
        <ul className={s.dropdown_list} onMouseLeave={closeDropdown}>
          <li
            className={`${s.dropdown_list_item} ${
              filter === 'A to Z' && s.active
            }`}
            onClick={() => handleFilter('A to Z')}
          >
            A to Z
          </li>
          <li
            className={`${s.dropdown_list_item} ${
              filter === 'Z to A' && s.active
            }`}
            onClick={() => handleFilter('Z to A')}
          >
            Z to A
          </li>
          <li
            className={`${s.dropdown_list_item} ${
              filter === 'Less than 10$' && s.active
            }`}
            onClick={() => handleFilter('Less than 10$')}
          >
            Less than 10$
          </li>
          <li
            className={`${s.dropdown_list_item} ${
              filter === 'Greater than 10$' && s.active
            }`}
            onClick={() => handleFilter('Greater than 10$')}
          >
            Greater than 10$
          </li>
          <li
            className={`${s.dropdown_list_item} ${
              filter === 'Popular' && s.active
            }`}
            onClick={() => handleFilter('Popular')}
          >
            Popular
          </li>
          <li
            className={`${s.dropdown_list_item} ${
              filter === 'Not popular' && s.active
            }`}
            onClick={() => handleFilter('Not popular')}
          >
            Not popular
          </li>
          <li
            className={`${s.dropdown_list_item} ${
              filter === 'Show all' && s.active
            }`}
            onClick={() => handleFilter('Show all')}
          >
            Show all
          </li>
        </ul>
      )}
    </div>
  );
};
