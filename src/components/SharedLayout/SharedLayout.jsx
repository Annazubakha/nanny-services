import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import s from './SharedLayout.module.css';
import { Header } from 'components';

const SharedLayout = () => {
  return (
    <div className={s.wrapper}>
      <Header />
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default SharedLayout;
