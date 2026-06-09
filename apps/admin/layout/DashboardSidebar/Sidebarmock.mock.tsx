import React from 'react';
import { TNavItem } from './Sidebar.types';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

export const navItems: TNavItem[] = [
  {
    name: 'Home',
    icon: <HomeOutlinedIcon />,
    submenu: [
      {
        name: 'Hero Banner',
        route: '/',
      },
      {
        name: 'Publishers',
        route: '/publishers',
      },
    ],
  },
  {
    name: 'about us',
    route: '/aboutus',
    icon: <HomeOutlinedIcon />,
  },
];
