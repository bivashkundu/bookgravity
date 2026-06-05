'use client';

import React from 'react';
import Box from '@mui/material/Box';
import AuthWrapper from '@/layout/AuthWrapper/AuthWrapper';
import { Button, Checkbox, FormControlLabel, Grid, Stack } from '@mui/material';
import InputFieldCommon from '@/ui/CommonInput/CommonInput';
import Link from 'next/link';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, TLoginSchemaType } from '../authschema';

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<TLoginSchemaType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: true,
    },
  });

  const onSubmit = (data: TLoginSchemaType) => {
    console.log('Login Form Data:', data);
  };

  return (
    <AuthWrapper mainImage='' heading='Welcome Back' para='Login to your account'>
      <Box component='form' onSubmit={handleSubmit(onSubmit)} noValidate>
        <Grid container spacing={2}>
          <Grid size={12}>
            <InputFieldCommon
              labelName='Email Address'
              placeholder='Enter Email'
              type='email'
              fullWidth
              {...register('email')}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          </Grid>
          <Grid size={12}>
            <InputFieldCommon
              labelName='Password'
              placeholder='Enter Password'
              isPassword
              fullWidth
              {...register('password')}
              error={!!errors.password}
              helperText={errors.password?.message}
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
              <Controller
                name='rememberMe'
                control={control}
                render={({ field: { value, onChange, ...field } }) => (
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={!!value}
                        onChange={onChange}
                        sx={{
                          '&.Mui-checked': {
                            color: '#c81317',
                          },
                        }}
                        disableRipple
                        {...field}
                      />
                    }
                    label={'Remember Me'}
                  />
                )}
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

