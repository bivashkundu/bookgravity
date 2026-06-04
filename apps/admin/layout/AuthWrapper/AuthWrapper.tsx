import assest from '@/json/assest';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { TAuthData } from './Auth.types';
import { AuthStack } from './AuthWrapper.styles';

const AuthWrapper = ({ mainImage, heading, para, children }: TAuthData) => {
  return (
    <AuthStack direction='row' flexWrap='wrap' alignItems='center'>
      <Box className='auth-left-col'>
        <Box className='auth-fig-sec'>
          <Image src={mainImage || assest.login_bg} alt='' width={1600} height={1800} />
        </Box>
      </Box>
      <Box className='auth-right-col'>
        <Box className='auth-right-innar'>
          <Box className='auth-topsec'>
            <Box className='logo-fig'>
              <Image src={assest.logomain} alt='logo' width={100} height={100} />
            </Box>
            <Typography variant='h1' textTransform='capitalize'>
              {heading}
            </Typography>
            <Typography variant='body1'>{para}</Typography>
          </Box>
          <Box className='auth-form-sec'>{children}</Box>
        </Box>
      </Box>
    </AuthStack>
  );
};

export default AuthWrapper;
