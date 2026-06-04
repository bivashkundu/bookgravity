import { Box, Stack, styled, Typography } from '@mui/material';
import React from 'react';

const DashboardHeader = () => {
  return (
    <DashboardHeaderStyled>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Stack
          direction='row'
          alignItems='center'
          justifyContent='space-between'
          className='header_options'
        >
          <Typography variant='h1'>Dashboard</Typography>
        </Stack>
      </Stack>
    </DashboardHeaderStyled>
  );
};

export default DashboardHeader;

export const DashboardHeaderStyled = styled(Box)``;
