import React, { useEffect } from 'react';
import Navbar from '../../components/navbar';
import { useDispatch, useSelector } from 'react-redux';
import { setError } from './redux/slices';
import ErrorDialog from '../../components/errorDialogRedux';
import Loader from '../../components/loader';
import { ContentContainer, MainContainer } from './styles';
import SideNavbar from './components/sideNavbar';
import { useSearchParams } from 'react-router-dom';
import { setProfileView } from './components/sideNavbar/redux/slices';
import { profileView } from './components/sideNavbar/redux/state';
import MainContent from './components/mainContent';
import Breadcrumbs from '../../components/breadcrumbs';

const Profile = () => {
  const { error, loading } = useSelector((state) => state.profile);
  const [searchParams, setSearchParams] = useSearchParams();
  const usernameUrl = searchParams.get('username');
  const username = useSelector((state) => state.app.username);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!usernameUrl) {
      setSearchParams({ username: username });
    }
  }, [usernameUrl, setSearchParams, username]);

  useEffect(() => {
    if (usernameUrl !== username) {
      dispatch(setProfileView(profileView.posts));
    }
  }, [usernameUrl, setSearchParams, username, dispatch]);

  const viewToRender = (
    <>
      <Navbar />
      <MainContainer>
        <SideNavbar />
        <ContentContainer>
          <Breadcrumbs />
          <MainContent />
          {loading ? <Loader /> : null}
        </ContentContainer>
      </MainContainer>
    </>
  );

  if (error) return <ErrorDialog error={error} setError={setError} />;
  else return viewToRender;
};

export default Profile;
