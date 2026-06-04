'use client';

import React from 'react';
import Box from '@mui/material/Box';
import AuthWrapper from '@/layout/AuthWrapper/AuthWrapper';
import { Button, Checkbox, FormControlLabel, Grid, Stack } from '@mui/material';
import InputFieldCommon from '@/ui/CommonInput/CommonInput';
import Link from 'next/link';

const LoginPage = () => {
  return (
    <AuthWrapper mainImage='' heading='Welcome Back' para='Login to your account'>
      <Box component='form'>
        <Grid container spacing={2}>
          <Grid size={12}>
            <InputFieldCommon
              labelName='Email Address'
              placeholder='Enter Email'
              type='email'
              required
              fullWidth
            />
          </Grid>
          <Grid size={12}>
            <InputFieldCommon
              labelName='Password'
              placeholder='Enter Password'
              type='password'
              required
              fullWidth
            />
          </Grid>
          <Grid size={12}>
            <Stack
              direction='row'
              alignItems='center'
              flexWrap='wrap'
              justifyContent='space-between'
              className='remember-stack'
            >
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    sx={{
                      '&.Mui-checked': {
                        color: '#c81317',
                      },
                    }}
                    disableRipple
                  />
                }
                label={'Remember Me'}
              />
              <Link href='#'>Forgot Password?</Link>
            </Stack>
          </Grid>
          <Grid size={12}>
            <Button fullWidth variant='contained' type='submit' disableElevation>
              SIGN IN
            </Button>
          </Grid>
        </Grid>
      </Box>
    </AuthWrapper>
  );
};

export default LoginPage;
