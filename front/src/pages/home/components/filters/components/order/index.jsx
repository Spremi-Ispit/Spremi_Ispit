import React, { useEffect } from 'react';
import Tab from '@mui/material/Tab';
import Time from '@mui/icons-material/AccessTime';
import { OrdersContainer } from './styles';
import Tabs from '@mui/material/Tabs';
import { useDispatch, useSelector } from 'react-redux';
import { setOrder } from '../../../../redux/slices';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import { urlParams, orderEnum } from '../../../../../../utils/enums';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import {
  editSearchParams,
  updateSearchParam,
} from '../../../../../../utils/useUpdateSearchParam';

const Order = () => {
  const order = useSelector((state) => state.home.order);
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const urlOrder = searchParams.get(urlParams.order);
  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (event, newValue) => {
    updateSearchParam(urlParams.order, newValue, searchParams, setSearchParams);
  };

  useEffect(() => {
    if (urlOrder && urlOrder !== order) {
      dispatch(setOrder(urlOrder));
    } else {
      const newSearchParams = editSearchParams(
        urlParams.order,
        order,
        searchParams
      );

      navigate(
        {
          pathname: location.pathname,
          search: newSearchParams,
        },
        { replace: true }
      );
    }
  }, [
    urlOrder,
    dispatch,
    searchParams,
    setSearchParams,
    order,
    location.pathname,
    navigate,
  ]);

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
        <Tab
          value={orderEnum.like}
          label="Ocena"
          icon={<ThumbUpOffAltIcon />}
        />
        <Tab
          value={orderEnum.dislike}
          label="Ocena"
          icon={<ThumbDownOffAltIcon />}
        />
      </Tabs>
    </OrdersContainer>
  );
};

export default Order;
