import React from 'react';
import { BoxDeliveryShipping } from './DeliveryShippingWrapper.styles';
import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import RedeemIcon from '@mui/icons-material/Redeem';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const DeliveryShippingSection = () => {
  const shiplist = [
    {
      icon: <LocalShippingIcon />,
      title: 'Free Shipping Item',
      description: 'Above 400 INR',
    },
    {
      icon: <RedeemIcon />,
      title: 'Best prices & offers',
      description: 'Orders 400₹ or more',
    },
    {
      icon: <CalendarMonthIcon />,
      title: 'Great daily deal',
      description: 'When you sign up',
    },
    {
      icon: <SupportAgentIcon />,
      title: 'Help & Support',
      description: 'Call us : + 91 1234567890',
    },
  ];
  return (
    <BoxDeliveryShipping>
      <Container fixed>
        <Grid container spacing={2}>
          {shiplist.map((item, i) => (
            <Grid key={i} size={{ lg: 3, xs: 12 }}>
              <Stack direction='row' alignItems='center' flexWrap='wrap' className='dl-box'>
                <span className='icon'>{item.icon}</span>
                <Box className='dl-content'>
                  <Typography variant='body1' fontWeight={500}>
                    {item.title}
                  </Typography>
                  <Typography variant='body2' fontWeight={500}>
                    {item.description}
                  </Typography>
                </Box>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </BoxDeliveryShipping>
  );
};

export default DeliveryShippingSection;
