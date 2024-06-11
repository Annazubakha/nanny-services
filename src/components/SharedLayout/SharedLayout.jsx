import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components';
import s from './SharedLayout.module.css';

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
