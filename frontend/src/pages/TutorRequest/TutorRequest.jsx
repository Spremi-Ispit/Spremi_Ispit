// import io from 'socket.io-client';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import Chat from './components/Chat/Chat';
import { selectUsername } from '../../redux/app/selectors';
import Navbar from '../../components/navbar/Navbar';

// const socket = io('http://localhost:5000');

const TutorRequest = () => {
  const username = useSelector(selectUsername);
  const tutorRequestId = 123;

  useEffect(() => {
    // socket.emit('join_room', tutorRequestId);
  }, []);

  return (
    <>
      <Navbar />
      <Chat socket={socket} username={username} room={tutorRequestId} />
    </>
  );
};

export default TutorRequest;
