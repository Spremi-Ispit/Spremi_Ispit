import React, { useEffect, useRef } from 'react';
import { collection, orderBy, limit, query } from 'firebase/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import styled from 'styled-components';
import colors from '../../../../theme/colors';
import useChat from '../../useChat';
import Message from './components/Message';

const DividerDiv = styled.div`
  border: 1px solid ${colors.footer};
`;

const MessagesDiv = styled.div`
  color: white;
  overflow: auto;

  max-height: 300px;
  overflow-wrap: anywhere;
`;

const Messages = ({ group }) => {
  const { firestore } = useChat();
  const messagesCollection = collection(firestore, group);
  const q = query(messagesCollection, orderBy('createdAt'));
  const [messages] = useCollectionData(q, { idField: 'id' });
  const messagesScrollRef = useRef();

  useEffect(() => {
    if (messagesScrollRef.current) {
      messagesScrollRef.current.scrollIntoView();
    }
  }, [messages?.length, messagesScrollRef.current]);

  return (
    <MessagesDiv>
      {messages &&
        messages.map((msg, index) => <Message key={index} message={msg} />)}
      <DividerDiv ref={messagesScrollRef} />
    </MessagesDiv>
  );
};

export default Messages;
