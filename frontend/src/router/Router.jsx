import { BrowserRouter, Routes, Route } from 'react-router-dom';
import * as routes from './routes';
import {
  CreatePost,
  Home,
  Login,
  Profile,
  Register,
  Users,
  ViewPost,
} from '../pages';
import PrivateRoutes from './PrivateRoutes';
import About from '../pages/about/About';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path={routes.createPostRoute} element={<CreatePost />} exact />
          <Route path={routes.usersRoute} element={<Users />} exact />
          <Route path={routes.profileRoute} element={<Profile />} exact />
        </Route>
        <Route path={routes.viewPostRoute} element={<ViewPost />} exact />
        <Route path={routes.homeRoute} element={<Home />} />
        <Route path={routes.loginRoute} element={<Login />} />
        <Route path={routes.registerRoute} element={<Register />} />
        <Route path={routes.aboutRoute} element={<About />} />
        <Route path={'*'} element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
