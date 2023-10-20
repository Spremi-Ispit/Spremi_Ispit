import React from 'react';
import styled from 'styled-components';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {
  allowedUrlParams,
  useUrlManager,
} from '../../../utils/managers/UrlManager';

const OrdersContainer = styled.div`
  margin-bottom: 10px;

  .MuiFormControl-root {
    background: white;
  }
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
      <FormControl fullWidth variant="filled">
        <InputLabel>Sortiraj objave</InputLabel>
        <Select
          value={urlOrder}
          label="Sortiraj objave"
          onChange={handleChange}
        >
          <MenuItem value={orders.newest}>Novije</MenuItem>
          <MenuItem value={orders.like}>Dobro ocenjene</MenuItem>
          <MenuItem value={orders.dislike}>Loše ocenjene</MenuItem>
        </Select>
      </FormControl>
    </OrdersContainer>
  );
};

export default Order;
