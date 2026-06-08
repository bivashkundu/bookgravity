'use client';
import Box from '@mui/material/Box';

import { styled } from '@mui/material';
import Stack from '@mui/material/Stack';
import React from 'react';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import DashboardSidebar from '../DashboardSidebar/DashboardSidebar';

interface IDashBoardProps {
  children?: React.ReactNode;
}

const DashboardWrapper: React.FC<IDashBoardProps> = ({ children }) => {
  return (
    <DashboardWrapperStyled direction='row' flexWrap='wrap'>
      <DashboardSidebar />

      <Box className='wrapper_rgt'>
        <DashboardHeader />
        <Box className='dashboard_body'>{children}</Box>
      </Box>
    </DashboardWrapperStyled>
  );
};

export default DashboardWrapper;

export const DashboardWrapperStyled = styled(Stack)`
  height: 100dvh;

  .wrapper_rgt {
    width: calc(100% - 260px);
    flex-basis: calc(100% - 260px);
    margin-left: auto;
  }

  .dashboard_body {
    padding: 24px;
    padding-bottom: 16px;
  }
`;
