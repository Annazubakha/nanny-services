import { BgImg } from '../../components/BgImg/BgImg';
import s from './Home.module.css';

// import img1 from '../../assets/images/bg_image@1x.png';
// import img2 from '../../assets/images/bg_image@2x.png';

const Home = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.inside_wrapper}>
        <h1 className={s.title}>Make Life Easier for the Family&#58;</h1>
        <p className={s.description}>
          Find Babysitters Online for All Occasions
        </p>
      </div>
      <BgImg className={s.test} />
    </div>
  );
};

export default Home;
