// @ts-nocheck
import { Server } from 'socket.io';
import { isBanned } from './authManager';

const socketChannels = {
  join_room: 'join_room',
  ban_user: 'ban_user'
};

export const initializeSocket = (server) => {
  const io = new Server(server, {
    cors: {
      methods: ['GET', 'POST'],
      transports: ['websocket', 'polling'],
      credentials: true
    },
    allowEIO3: true
  });

  io.on('connection', (socket) => {
    // console.log(`SOCKET---> User Connected, socket.id: ${socket.id}`);

    //-------socket.emit VS socket.to(...).emit-------
    //The most common issue is the fact that socket.to(email) will broadcast the message to
    //all sockets in the email room except for the sender. If you want to emit an event to
    //the specific socket that just joined the room, you can use socket.emit() instead.

    socket.on(socketChannels.join_room, async (email) => {
      socket.join(email);
      // console.log(
      //   `SOCKET---> User with ID: ${socket.id} joined room: ${email}`
      // );

      // Notify the user if have been banned in the mean time (user is oppening the app and have the token from the last use)
      const bannedStatus = await isBanned(email);
      if (bannedStatus.banned) {
        socket.emit(email, 'You have been banned!');
      }
    });

    socket.on(socketChannels.ban_user, (email) => {
      // Admin execute ban_user action
      socket.to(email).emit(email, 'You have been banned');
    });

    socket.on('disconnect', () => {
      console.log('User Disconnected:', socket.id);
    });
  });
};
