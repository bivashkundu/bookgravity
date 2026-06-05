import Box from '@mui/material/Box';
import React from 'react';
// import Footer from '../Footer/Footer';
import Header from '../Header/Header';

interface IwrapperProps {
  children: React.ReactNode;
}

const Wrapper = (props: IwrapperProps) => {
  const { children } = props;

  return (
    <>
      <Header />

      <Box className='body_content' component='main'>
        {children}
      </Box>

      {/* <Footer /> */}
    </>
  );
};

export default Wrapper;
