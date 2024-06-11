import { GetUser, ReviewsList } from 'components';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import {
  addToFavorites,
  getUserFavorites,
  removeFromFavorites,
} from '../../api/api';
import { convertedAge, convertedCharacters } from '../../helpers';
import { Icon } from 'components';
import s from './NannyItem.module.css';

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
  const userId = GetUser();

  const age = convertedAge(birthday);
  const formatedCharacters = convertedCharacters(characters);

  const [isReadMore, setIsReadMore] = useState(false);
  const [isFavorites, setIsFavorites] = useState(false);
  console.log(isFavorites);

  useEffect(() => {
    const fetchUserFavorites = async () => {
      try {
        const userFavorites = await getUserFavorites(userId);
        console.log(userId);
        console.log(userFavorites);
        if (userFavorites) {
          const favoriteKeys = Object.keys(userFavorites);
          console.log(favoriteKeys);
          const isNannyInFavorites = favoriteKeys.some(
            (key) => userFavorites[key].name === name
          );
          console.log(isNannyInFavorites);
          setIsFavorites(isNannyInFavorites);
        }
      } catch {
        toast.error('Something went wrong. Please try again.');
      }
    };

    if (userId) {
      fetchUserFavorites();
    } else {
      setIsFavorites(false);
    }
  }, [userId, name]);

  const handleFavoriteToggle = async () => {
    if (!userId) {
      toast.info('Please log in to your account to add nanny to favorites.');
    } else {
      try {
        const userFavorites = await getUserFavorites(userId);
        if (userFavorites) {
          const favoriteKeys = Object.keys(userFavorites);
          const favoriteNanny = favoriteKeys.find(
            (key) => userFavorites[key].name === name
          );
          if (favoriteNanny) {
            await removeFromFavorites(userId, favoriteNanny);
            setIsFavorites(false);
          } else {
            await addToFavorites(userId, {
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
            });
            setIsFavorites(true);
          }
        } else {
          await addToFavorites(userId, {
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
          });
          setIsFavorites(true);
        }
      } catch (error) {
        console.log(error.message);
        toast.error('Something went wrong. Please try again.');
      }
    }
  };

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

        <button className={s.btn_heart} onClick={handleFavoriteToggle}>
          {isFavorites ? (
            <Icon id="heart-active" size={26} />
          ) : (
            <Icon id="heart" size={26} />
          )}
        </button>
      </div>
    </li>
  );
};
