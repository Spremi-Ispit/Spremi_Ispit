import React from 'react';
import Tab from '@mui/material/Tab';
import ThumbDown from '@mui/icons-material/ThumbDown';
import ThumbUp from '@mui/icons-material/ThumbUp';
import Time from '@mui/icons-material/AccessTime';
import { OrdersContainer } from './styles';
import Tabs from '@mui/material/Tabs';
import { orderEnum } from '../../redux/state';
import { useDispatch, useSelector } from 'react-redux';
import { setOrder } from '../../redux/slices';

export const Order = () => {
  const order = useSelector((state) => state.profile.posts.order);
  const dispatch = useDispatch();

  const handleChange = (event, newValue) => {
    dispatch(setOrder(newValue));
  };

  return (
    <OrdersContainer>
      <Tabs
        value={order}
        onChange={handleChange}
        TabIndicatorProps={{ style: { backgroundColor: '#0099feba' } }}
        textColor="inherit"
        variant="scrollable"
        scrollButtons={true}
        allowScrollButtonsMobile
      >
        <Tab value={orderEnum.newest} label="Najnovije" icon={<Time />} />
        <Tab value={orderEnum.like} label="Ocena" icon={<ThumbUp />} />
        <Tab value={orderEnum.dislike} label="Ocena" icon={<ThumbDown />} />
      </Tabs>
    </OrdersContainer>
  );
};

export default Order;
