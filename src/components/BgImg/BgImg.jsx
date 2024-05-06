import s from '../../pages/Home/Home.module.css';

import img1 from '../../assets/images/bg_image@1x.png';
import img2 from '../../assets/images/bg_image@2x.png';

export const BgImg = () => {
  return (
    <div>
      <picture>
        <source srcSet={`${img1} 1x, ${img2} 2x`} type="image/png" />
        <img className={s.bg_photo} src={img1} alt="Photo of the user" />
      </picture>
    </div>
  );
};
