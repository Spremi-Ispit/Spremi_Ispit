// @ts-nocheck
import { Server } from 'socket.io';
import { User } from '../entities/User';

// ------------------IMPORTANT------------------
// all users are listening to socket_channels,
// but the message will recive only the user that is in the room (room===userId)

//-------socket.emit VS socket.to(...).emit-------
//The most common issue is the fact that socket.to(email) will broadcast the message to
//all sockets in the email room except for the sender. If you want to emit an event to
//the specific socket that just joined the room, you can use socket.emit() instead.

const message = (username) =>
  `The user ${username} has been banned. If you think this is a mistake, please contact us.`;

export const sockets = (server) => {
  const io = new Server(server, {
    cors: {
      origin: '*',
      methods: ['GET', 'POST']
      // transports: ['websocket', 'polling'],
      // credentials: true
    }
    // allowEIO3: true
  });

  io.on('connection', (socket) => {
    console.log(`User Connected: ${socket.id}`);

    socket.on('join_room', async (data) => {
      const { room, username, time } = data;

      await socket.join(room);
      console.log(`User with ID: ${socket.id} joined room: ${room}`);

      const user = await User.findOne({
        where: {
          id: room
        }
      });

      if (user.banned) {
        socket.emit('banned_user', message(username));
      }
    });

    socket.on('ban_user', async (data) => {
      const { room, username } = data;
      const user = await User.findOne({
        where: {
          id: room
        }
      });
      user.banned = true;
      await user.save();

      socket.to(room).emit('banned_user', message(username));
    });

    socket.on('disconnect', () => {
      console.log('User Disconnected', socket.id);
    });
  });
};

export default sockets;
