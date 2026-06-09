'use client';
import assest from '@/json/assest';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Collapse from '@mui/material/Collapse';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { DashboardSidebarWrapper } from './SidebarWrapper.styles';
import { navItems } from './Sidebarmock.mock';

const isRouteActive = (currentPathname: string, route: string) => {
  const normCurrent = currentPathname.replace(/\/$/, '') || '/';
  const normRoute = route.replace(/\/$/, '') || '/';

  if (normRoute === '/') {
    return normCurrent === '/';
  }

  return normCurrent === normRoute || normCurrent.startsWith(normRoute + '/');
};

const DashboardSidebar = () => {
  const pathname = usePathname();
  const [openMenus, setOpenMenus] = React.useState<Record<string, boolean>>({});

  const handleToggle = (name: string) => {
    setOpenMenus(prev => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  React.useEffect(() => {
    navItems.forEach(item => {
      if (item.submenu) {
        const isChildActive = item.submenu.some(sub => isRouteActive(pathname, sub.route));
        if (isChildActive) {
          setOpenMenus(prev => ({ ...prev, [item.name]: true }));
        }
      }
    });
  }, [pathname]);

  return (
    <DashboardSidebarWrapper>
      <Box className='logo_sec'>
        <Link href='/'>
          <Image src={assest?.logomain} alt='logo' width={130} height={98} />
        </Link>
      </Box>
      <List disablePadding className='sidebar_menu'>
        {navItems?.map((data, index) => {
          const hasSubmenu = !!data.submenu && data.submenu.length > 0;

          if (hasSubmenu) {
            const isOpen = !!openMenus[data.name];
            const isChildActive = data.submenu?.some(sub => isRouteActive(pathname, sub.route));
            return (
              <ListItem disablePadding className='sidebar-menulist' key={index}>
                <Button
                  onClick={() => handleToggle(data.name)}
                  startIcon={data?.icon}
                  endIcon={isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                  fullWidth
                  className={`cmn-listbtn ${isChildActive ? 'active' : ''}`}
                >
                  {data?.name}
                </Button>

                <Collapse in={isOpen} timeout='auto' unmountOnExit>
                  <List disablePadding className='submenu_list'>
                    {data.submenu?.map((sub, subIndex) => (
                      <ListItem
                        disablePadding
                        key={subIndex}
                        className={isRouteActive(pathname, sub?.route || '') ? 'active' : ''}
                      >
                        <Link href={sub?.route}>{sub?.name}</Link>
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              </ListItem>
            );
          }

          return (
            <ListItem disablePadding key={index} className='sidebar-menulist'>
              <Button
                fullWidth
                component={Link}
                href={data?.route}
                startIcon={data?.icon}
                sx={{ justifyContent: 'flex-start' }}
                className={`cmn-listbtn ${isRouteActive(pathname, data?.route || '') ? 'active' : ''}`}
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
