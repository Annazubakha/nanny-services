import { Icon } from 'components';
import s from './ReviewsItem.module.css';
import { firstLetter, convertedRating } from '../../helpers';

export const ReviewsItem = ({ comment, rating, reviewer }) => {
  const firstNameLetter = firstLetter(reviewer);
  const ratingWithPunto = convertedRating(rating);
  return (
    <li className={s.item}>
      <div className={s.wrapper}>
        <div className={s.letter}>{firstNameLetter}</div>
        <div className={s.wrapper_inside}>
          <p>{reviewer}</p>
          <div className={s.wrapper_icon}>
            <Icon className={s.icon} id="star" size={16} />
            <p className={s.text_wrapper}>{ratingWithPunto}</p>
          </div>
        </div>
      </div>
      <p className={s.comment}>{comment}</p>
    </li>
  );
};
