import { convertedAge, convertedCharacters } from '../../helpers';
import { Icon } from 'components';
import s from './NannyItem.module.css';
import { useState } from 'react';
import { ReviewsList } from '../ReviewsList/ReviewsList';

export const NannyItem = ({
  name,
  avatar_url,
  education,
  experience,
  kids_age,
  characters,
  about,
  birthday,
  location,
  price_per_hour,
  rating,
  reviews,
}) => {
  const age = convertedAge(birthday);
  const formatedCharacters = convertedCharacters(characters);

  const [isReadMore, setIsReadMore] = useState(false);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <li className={s.item}>
      <div className={s.nanny_card}>
        <div className={s.avatar_wrapper}>
          <img className={s.avatar} src={avatar_url} alt="Nanny's avatar" />
          <Icon className={s.icon_online} id="online" size={14} />
        </div>
        <div>
          <p className={s.title}>Nanny</p>
          <p className={s.accent_name}>{name}</p>
          <div className={s.wrapper_inside}>
            <p className={s.text_wrapper}>
              Age: <span className={s.accent_age}> {age}</span>
            </p>
            <p className={s.text_wrapper}>
              Experience:
              <span className={s.accent}> {experience}</span>
            </p>
            <p className={s.text_wrapper}>
              Kids Age:
              <span className={s.accent}> {kids_age}</span>
            </p>
            <p className={s.text_wrapper}>
              Characters:
              <span className={s.accent}> {formatedCharacters}</span>
            </p>
            <p className={s.text_wrapper}>
              Education:
              <span className={s.accent}> {education}</span>
            </p>
          </div>

          <p className={s.about}>{about}</p>
          {isReadMore && (
            <ReviewsList
              reviews={reviews}
              name={name}
              avatar_url={avatar_url}
            />
          )}
          {!isReadMore && (
            <button className={s.btn_more} onClick={toggleReadMore}>
              Read more
            </button>
          )}
        </div>
        <div className={s.wrapper_top}>
          <p className={s.wrapper_top_inside}>
            <Icon id="location" size={16} />
            {location}
          </p>
          <p className={s.wrapper_top_inside}>
            <Icon className={s.icon_star} id="star" size={16} />
            Rating: {rating}
          </p>
          <p className={s.price_text}>
            Price / 1 hour:
            <span className={s.price}> {price_per_hour}$</span>
          </p>
        </div>
        <button className={s.btn_heart}>
          <Icon id="heart" size={26} />
        </button>
      </div>
    </li>
  );
};
