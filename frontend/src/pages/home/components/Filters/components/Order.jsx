import React from 'react';
import styled from 'styled-components';
import {
  allowedUrlParams,
  useUrlManager,
} from '../../../../../utils/managers/UrlManager';
import { fonts } from '../../../../../theme/fonts';

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

const Label = styled.div`
  margin-bottom: 10px;
  ${fonts(15, 600, 'italic', 'Libre Bodoni')}
`;
const Select = styled.select`
  height: 2em;
  ${fonts(15, 600, 'normal', 'Libre Bodoni')}
`;

export const Order = () => {
  const urlManager = useUrlManager();
  const { urlOrder } = urlManager.getParams();

  const handleChange = (event) => {
    urlManager.updateUrlParam(allowedUrlParams.order, event.target.value);
  };

  return (
    <OrdersContainer>
      <Label>Sortiraj objave </Label>
      <Select value={urlOrder} onChange={handleChange}>
        <option value={orders.newest}>Novije</option>
        <option value={orders.like}>Dobro ocenjene</option>
        <option value={orders.dislike}>Loše ocenjene</option>
      </Select>
    </OrdersContainer>
  );
};

export default Order;
