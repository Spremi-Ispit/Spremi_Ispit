import React from 'react';
import { useSelector } from 'react-redux';
import { profileView } from '../sideNavbar/redux/state';
import Posts from './components/posts';
import ReportedComments from './components/reportedComments';
import ReportedPosts from './components/reportedPosts';
import UserInfo from './components/userInfo';

export const MainContent = () => {
  const view = useSelector((state) => state.profile.sideNavbar.profileView);

  return view === profileView.posts ? (
    <Posts />
  ) : view === profileView.reportedComments ? (
    <ReportedComments />
  ) : view === profileView.reportedPosts ? (
    <ReportedPosts />
  ) : view === profileView.personalData ? (
    <UserInfo />
  ) : null;
};

export default MainContent;
