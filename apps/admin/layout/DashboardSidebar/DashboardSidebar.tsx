'use client';
import assest from '@/json/assest';
import { styled } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const commonpath = '/dashboard';
const navItems: {
  name: string;
  route: string;
  icon: React.ReactNode;
}[] = [
  {
    name: 'Dashboard',
    route: `${commonpath}/`,
    icon: null,
  },
  {
    name: 'My Vehicles',
    route: `${commonpath}/my-vehicles`,
    icon: null,
  },
  {
    name: 'Rental Rides',
    route: `${commonpath}/rental-rides`,
    icon: null,
  },
  {
    name: 'Messages',
    route: `${commonpath}/message/`,
    icon: null,
  },
  {
    name: 'My Profile',
    route: `${commonpath}/profile`,
    icon: null,
  },
];

const DashboardSidebar = () => {
  const pathname = usePathname();
  return (
    <DashboardSidebarWrapper>
      <Box className='logo_sec'>
        <Link href={`${commonpath}`}>
          <Image src={assest?.logo} alt='logo' width={149} height={74} />
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

export const DashboardSidebarWrapper = styled(Box)`
  width: 260px;
  flex-basis: 260px;
  position: fixed;
  left: 0px;
  top: 0px;
  height: 100vh;
  overflow-y: auto;
  z-index: 5;
  border-right: 1px solid rgba(67, 26, 26, 0.078);
  background: ${({ theme }) => theme.palette.customColors.bodyBg};

  .logo_sec {
    position: relative;
    padding: 24px 14px;
    display: flex;
    align-items: center;
    justify-content: center;

    a {
      width: 149px;
      height: auto;
      line-height: 0;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  .sidebar_menu {
    padding: 0 24px;
    height: calc(100dvh - 330px);
    overflow-y: auto;
    margin-bottom: 20px;
    width: 100%;
    overflow-x: hidden;

    li {
      &:not(:last-child) {
        margin-bottom: 8px;
      }
      a,
      button {
        font-weight: 400;
        font-size: 16px;
        line-height: 1.5;
        width: 100%;
        justify-content: flex-start;
        padding: 14px 16px;
        color: ${({ theme }) => theme.palette.customColors?.placeText};
        border-radius: 10px;
        min-width: inherit;
        text-transform: capitalize;

        .MuiButton-startIcon {
          margin-left: 0px;
          margin-right: 12px;
        }
        &:hover {
          background: ${({ theme }) => theme.palette.primary.main};
          color: ${({ theme }) => theme.palette.common.white};
        }
      }
      &.active {
        a {
          background: ${({ theme }) => theme.palette.primary.main};
          color: ${({ theme }) => theme.palette.common.white};
        }
      }
    }
  }
`;
