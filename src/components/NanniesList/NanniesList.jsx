import { useEffect, useState } from 'react';
import { fetchNannies } from '../../api/api';
import { NannyItem } from '../NannyItem/NannyItem';
import { toast } from 'react-toastify';
import s from './NanniesList.module.css';
export const NanniesList = () => {
  const [nannies, setNannies] = useState([]);

  console.log(nannies);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const nanniesData = await fetchNannies();
        console.log(nanniesData);
        setNannies(nanniesData);
      } catch (error) {
        toast.error(`Something went wrong.`);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={s.wrapper}>
      <ul className={s.list}>
        {nannies?.map(
          ({
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
          }) => (
            <NannyItem
              key={name}
              name={name}
              avatar_url={avatar_url}
              education={education}
              experience={experience}
              kids_age={kids_age}
              characters={characters}
              about={about}
              birthday={birthday}
              rating={rating}
              price_per_hour={price_per_hour}
              location={location}
              reviews={reviews}
            />
          )
        )}
      </ul>

      <button className={s.btn_more}>Load more</button>
    </div>
  );
};
