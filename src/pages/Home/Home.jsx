import { BgImg, Icon } from 'components';
import s from './Home.module.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className={s.wrapper}>
      <div className={s.inside_wrapper}>
        <h1 className={s.title}>Make Life Easier for the Family&#58;</h1>
        <p className={s.description}>
          Find Babysitters Online for All Occasions
        </p>
        <Link
          to="/nannies"
          className={s.link_start}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onFocus={() => setIsHovered(true)}
        >
          Get started
          <Icon id={isHovered ? 'arrow-right' : 'arrow-top-right'} size={20} />
        </Link>
      </div>
      <div>
        {' '}
        <BgImg />{' '}
      </div>
    </div>
  );
};

export default Home;
