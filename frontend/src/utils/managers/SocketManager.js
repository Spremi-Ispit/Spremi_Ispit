import io from 'socket.io-client';
import { useAuthManager } from './AuthManager';
import { useSelector } from 'react-redux';
import { selectToken } from '../../redux/app/selectors';
import env from '../env';

const socketChannels = {
  join_room: 'join_room',
  ban_user: 'ban_user',
};

class SocketManager {
  #socket;

  constructor() {
    this.#socket = io.connect(env.VITE_SOCKET_URL, {
      transports: ['websocket', 'polling'],
    });
  }

  joinRoom(email) {
    try {
      this.#socket.emit(socketChannels.join_room, email);
    } catch (err) {
      throw new Error('Socket joinRoom problem...');
    }
  }

  listenForBan(email, clb) {
    this.#socket.on(email, clb);
  }

  banUser(email) {
    this.#socket.emit(socketChannels.ban_user, email);
  }
}

const socketManager = new SocketManager();

//to use socketManager in code, first have to initialize sockets with useSockets hook in App.jsx
export const useSocketManager = () => {
  return socketManager;
};

export const useSockets = () => {
  const token = useSelector(selectToken);
  const { decodedToken } = useJwt(token ?? '');
  const authManager = useAuthManager();

  useEffect(() => {
    if (decodedToken) {
      const { email } = decodedToken;
      socketManager.joinRoom(email);
      socketManager.listenForBan(email, authManager.banUser);
    }
  }, [decodedToken]);
};
