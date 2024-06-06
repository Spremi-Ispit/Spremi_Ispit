import io from 'socket.io-client';
import ErrorBoundary from './components/ErrorBoundary';
import useCorrectAppVersion from './utils/useCorrectAppVersion';
import Router from './router/Router';
import ReactGA from 'react-ga4';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { SocketsProvider } from './utils/useSockets';
import env from './config/env';
import { useSelector } from 'react-redux';
import {
  selectToken,
  selectUserId,
  selectUsername,
} from './redux/app/selectors';
import { useRedux } from './redux/useRedux';
import { appActions } from './redux/app/slice';

ReactGA.initialize('G-J24NM9G7SY');
const socket = io(env.SOCKETS_URL);
// const socket = io.connect(env.BACKEND_URL, {
//   transports: ['websocket', 'polling'],
// });

function App() {
  useCorrectAppVersion();
  const location = useLocation();
  const userId = useSelector(selectUserId);
  const username = useSelector(selectUsername);
  const setToken = useRedux(appActions.setToken);
  const token = useSelector(selectToken);

  useEffect(() => {
    if (token) {
      const data = {
        room: userId,
        username: username,
        time: new Date(),
      };
      socket.emit('join_room', data);

      socket.on('banned_user', (data) => {
        setToken(null);
        alert(data);
      });
    }
  }, [token]);

  useEffect(() => {
    ReactGA.send({
      hitType: 'pageview',
      page: window.location.pathname,
    });
  }, [location]);

  return (
    <>
      <ErrorBoundary>
        <SocketsProvider value={socket}>
          <Router />
        </SocketsProvider>
      </ErrorBoundary>
    </>
  );
}

export default App;
