import s from './NanniesListFavorites.module.css';

export const NanniesListFavorites = () => {
  return (
    <div className={s.wrapper}>
      <ul className={s.list}>
        {/* {nanniesFavorites?.map((nanny) => (
          <NannyItem key={nanny.name} {...nanny} />
        ))} */}
      </ul>
    </div>
  );
};
