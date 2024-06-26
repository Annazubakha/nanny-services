import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { PublicRoute, PrivateRoute } from '../routes';
import SharedLayout from './SharedLayout/SharedLayout';

const Home = lazy(() => import('pages/Home/Home'));
const Nannies = lazy(() => import('pages/Nannies/Nannies'));
const Favorites = lazy(() => import('pages/Favorites/Favorites'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route
          index
          element={
            <PublicRoute>
              <Home />
            </PublicRoute>
          }
        />
        <Route
          path="/nannies"
          element={
            <PublicRoute>
              <Nannies />
            </PublicRoute>
          }
        />
        <Route
          path="/favorites"
          element={
            <PrivateRoute>
              <Favorites />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};
export default App;
