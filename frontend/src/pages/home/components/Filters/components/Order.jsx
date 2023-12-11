import React from 'react';
import styled from 'styled-components';
import {
  allowedUrlParams,
  useUrlManager,
} from '../../../../../utils/managers/UrlManager';

const OrdersContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const orders = {
  newest: 'newest',
  like: 'like',
  dislike: 'dislike',
};

export const Order = () => {
  const urlManager = useUrlManager();
  const { urlOrder } = urlManager.getParams();

  const handleChange = (event) => {
    urlManager.updateUrlParam(allowedUrlParams.order, event.target.value);
  };

  return (
    <OrdersContainer>
      <label>Sortiraj objave </label>
      <select value={urlOrder} onChange={handleChange}>
        <option value={orders.newest}>Novije</option>
        <option value={orders.like}>Dobro ocenjene</option>
        <option value={orders.dislike}>Loše ocenjene</option>
      </select>
    </OrdersContainer>
  );
};

export default Order;
