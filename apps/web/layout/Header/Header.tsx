'use client';
import assest from '@/json/assest';
import InputFieldCommon from '@/ui/CommonInput/CommonInput';
import { Container, IconButton, List, ListItem, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import { DownHeadr, HeaderWrap } from './HeaderWrap.styles';
import SearchIcon from '@mui/icons-material/Search';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export default function Header() {
  const navItems = [
    {
      name: 'Top 100 Bestsellers',
      route: '/',
    },
    {
      name: 'Crime, Thriller & Mystery',
      route: '/',
    },
    {
      name: 'Literature & Fiction',
      route: '/',
    },
    {
      name: 'Comics & Mangas',
      route: '/',
    },
    {
      name: 'Poetry',
      route: '/',
    },
    {
      name: 'Travel & Tourism',
      route: '/',
    },
    {
      name: 'Religion & Spirituality',
      route: '/',
    },
  ];

  return (
    <Box component='header'>
      <HeaderWrap component='nav' position='static' elevation={0}>
        <Container fixed>
          <Toolbar disableGutters>
            <Link href='/' className='headerLogo'>
              <Image src={assest.logohead} width={256} height={79} alt='Logo' />
            </Link>
            <Stack direction='row' alignItems='center' flexWrap='wrap' className='hdr_rgt'>
              <Box className='header-srch'>
                <InputFieldCommon endAdornment={<SearchIcon />} placeholder='Search products...' />
              </Box>
              <IconButton color='primary' disableRipple>
                <PermIdentityIcon />
              </IconButton>
              <IconButton color='primary' disableRipple>
                <ShoppingCartOutlinedIcon />
              </IconButton>
            </Stack>
          </Toolbar>
        </Container>
      </HeaderWrap>
      <DownHeadr direction='row' alignItems='center' flexWrap='wrap'>
        <Container fixed>
          <List disablePadding>
            {navItems.map((item, index) => (
              <ListItem key={index} disablePadding sx={{ display: 'inline-block' }}>
                <Link href={item.route}>{item.name}</Link>
              </ListItem>
            ))}
          </List>
        </Container>
      </DownHeadr>
    </Box>
  );
}
