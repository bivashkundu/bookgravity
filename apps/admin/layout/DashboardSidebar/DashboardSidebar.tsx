'use client';
import assest from '@/json/assest';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { DashboardSidebarWrapper } from './SidebarWrapper.styles';

const navItems: {
  name: string;
  route: string;
  icon: React.ReactNode;
}[] = [
  {
    name: 'Home',
    route: '/',
    icon: null,
  },
];

const DashboardSidebar = () => {
  const pathname = usePathname();
  return (
    <DashboardSidebarWrapper>
      <Box className='logo_sec'>
        <Link href='/'>
          <Image src={assest?.logomain} alt='logo' width={130} height={98} />
        </Link>
      </Box>
      <List disablePadding className={`sidebar_menu`}>
        {navItems?.map((data, index) => {
          const isLogout = data.name === 'Logout';
          return (
            <ListItem
              disablePadding
              key={index}
              className={pathname === data?.route ? 'active' : ''}
            >
              <Button
                component={isLogout ? 'button' : Link}
                href={isLogout ? undefined : data?.route}
                onClick={
                  isLogout
                    ? (_e: React.MouseEvent<HTMLButtonElement>) => {
                        ('logout');
                      }
                    : undefined
                }
                startIcon={data?.icon}
              >
                {data?.name}
              </Button>
            </ListItem>
          );
        })}
      </List>
    </DashboardSidebarWrapper>
  );
};

export default DashboardSidebar;
