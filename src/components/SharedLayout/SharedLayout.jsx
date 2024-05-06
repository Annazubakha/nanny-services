import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from 'components';

const SharedLayout = () => {
  return (
    <div>
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
