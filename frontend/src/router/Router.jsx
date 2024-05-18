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
import Posts from '../pages/profile/components/Posts';
import CommentedPosts from '../pages/profile/components/CommentedPosts';
import UserInfo from '../pages/profile/components/userInfo/UserInfo';
import ReportedPosts from '../pages/profile/components/reportedPosts/ReportedPosts';
import ReportedComments from '../pages/profile/components/reportedComments/ReportedComments';
import ResetPassword from '../pages/ResetPassword/ResetPassword';
import RegistrationConfirm from '../pages/registrationConfirm/RegistrationConfirm';
import Videos from '../pages/Videos/Videos';
import CommunityTools from '../pages/CommunityTools/CommunityTools';
import CommunityGithub from '../pages/CommunityGithub/CommunityGithub';
import CommunityDrives from '../pages/CommunityDrives/CommunityDrives';
import Tutoring from '../pages/Tutoring/Tutoring';
import PrivateClasses from '../pages/profile/components/privateClasses/PrivateClasses';
import TutorRequest from '../pages/TutorRequest/TutorRequest';

export default function Router() {
  const privateRoutes = (
    <Route element={<PrivateRoutes />}>
      <Route path={routes.createPostRoute} element={<CreatePost />} exact />
      <Route path={routes.profileRoute} element={<Profile />}>
        <Route path={routes.profilePostsRoute} element={<Posts />} />
        <Route
          path={routes.profileCommentedPostsRoute}
          element={<CommentedPosts />}
        />
        <Route path={routes.profileInfoRoute} element={<UserInfo />} />
        <Route
          path={routes.profileReportedPostsRoute}
          element={<ReportedPosts />}
        />
        <Route
          path={routes.profileReportedCommentsRoute}
          element={<ReportedComments />}
        />
        <Route path={routes.profileClasses} element={<PrivateClasses />} />
      </Route>
      <Route
        path={`${routes.tutorRequestRoute(':id')}`}
        element={<TutorRequest />}
      />
    </Route>
  );

  const publicRoutes = (
    <>
      <Route path={routes.usersRoute} element={<Users />} exact />
      <Route path={routes.videosRoute} element={<Videos />} exact />
      <Route path={routes.viewPostRoute} element={<ViewPost />} exact />
      <Route path={routes.homeRoute} element={<Home />} />
      <Route path={routes.loginRoute} element={<Login />} />
      <Route path={routes.registerRoute} element={<Register />} />
      <Route path={routes.resetPasswordRoute} element={<ResetPassword />} />
      <Route
        path={routes.registrationConfirmRoute}
        element={<RegistrationConfirm />}
      />
      <Route path={routes.communityGithubRoute} element={<CommunityGithub />} />
      <Route path={routes.communityDrivesRoute} element={<CommunityDrives />} />
      <Route path={routes.communityToolsRoute} element={<CommunityTools />} />
      <Route path={routes.tutoringRoute} element={<Tutoring />} />
    </>
  );

  return (
    <Routes>
      {privateRoutes}
      {publicRoutes}
      <Route path={'*'} element={<Home />} />
    </Routes>
  );
}
