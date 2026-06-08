'use client';

import React from 'react';
import Box from '@mui/material/Box';
import AuthWrapper from '@/layout/AuthWrapper/AuthWrapper';
import { Button, Grid, Typography } from '@mui/material';
import InputFieldCommon from '@/ui/CommonInput/CommonInput';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema, TRegisterSchemaType } from '../authschema';
import useAuth from '@/hooks/useAuth';

const RegisterPage = () => {
  const { registerSubmit, loading } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterSchemaType>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = async (data: TRegisterSchemaType) => {
    await registerSubmit(data);
  };

  return (
    <AuthWrapper heading='Create Account' para='Register a new admin account'>
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
            <InputFieldCommon
              labelName='Confirm Password'
              placeholder='Confirm Password'
              isPassword
              fullWidth
              {...register('confirmPassword')}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword?.message}
            />
          </Grid>
          <Grid size={12}>
            <Button fullWidth variant='contained' type='submit' disableElevation disabled={loading}>
              {loading ? 'REGISTERING...' : 'SIGN UP'}
            </Button>
          </Grid>
          <Grid size={12} sx={{ mt: 1, textAlign: 'center' }}>
            <Typography variant='body2' color='textSecondary'>
              Already have an account?{' '}
              <Link
                href='/login/'
                style={{ color: '#c81317', fontWeight: 600, textDecoration: 'none' }}
              >
                Sign In
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </AuthWrapper>
  );
};

export default RegisterPage;
