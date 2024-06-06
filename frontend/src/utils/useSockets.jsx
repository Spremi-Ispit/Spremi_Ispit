import * as React from 'react';

const SocketsContext = React.createContext();

function SocketsProvider({ value, children }) {
  return (
    <SocketsContext.Provider value={value}>{children}</SocketsContext.Provider>
  );
}

function useSockets() {
  return React.useContext(SocketsContext);
}

export { SocketsProvider, useSockets };
