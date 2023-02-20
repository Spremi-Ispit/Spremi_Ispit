import { BrowserRouter, Routes, Route } from 'react-router-dom';
import * as routes from './routes';
import Home from '../../pages/home';
import CreatePost from '../../pages/createPost';
import Login from '../../pages/login';
import Register from '../../pages/register';
import PrivateRoutes from './privateRoutes';
import Tags from '../../pages/tags';
import Profile from '../../pages/profile';
import Users from '../../pages/users';
import ViewPost from '../../pages/viewPost';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path={routes.createPostRoute} element={<CreatePost />} exact />
          <Route path={routes.tagsRoute} element={<Tags />} exact />
          <Route path={routes.usersRoute} element={<Users />} exact />
          <Route path={routes.profileRoute} element={<Profile />} exact />
        </Route>
        <Route path={routes.viewPostRoute} element={<ViewPost />} exact />
        <Route path={routes.homeRoute} element={<Home />} />
        <Route path={routes.loginRoute} element={<Login />} />
        <Route path={routes.registerRoute} element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
