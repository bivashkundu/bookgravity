import { useState } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import Cookies from 'js-cookie';
import axios from 'axios';
import axiosInstanse from '@/api/axiosInstance';
import { endpoints } from '@/api/endpoints';
import { TLoginSchemaType, TRegisterSchemaType } from '@/app/(auth)/authschema';
import { authStore } from '@/zustand/auth.zustand';

export const useAuth = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const loginSubmit = async (data: TLoginSchemaType) => {
    setLoading(true);
    try {
      const response = await axiosInstanse.post(endpoints.auth.login, {
        email: data.email,
        password: data.password,
      });

      const token = response.data.token;
      const tokenName = process.env.NEXT_APP_TOKEN_NAME || 'bookgravity_admin_token';

      // Save token in cookie (for middleware route protection)
      Cookies.set(tokenName, token, { expires: data.rememberMe ? 7 : undefined });

      // Save token in localStorage (for client storage)
      localStorage.setItem('token', token);
      authStore.actions.setUserData({ email: response.data.email as string });
      toast.success('Login successful!');
      router.push('/');
    } catch (error: unknown) {
      console.error('Login error:', error);
      let errorMessage = 'Login failed. Please check your credentials.';
      if (axios.isAxiosError(error)) {
        errorMessage = error.response?.data?.message || errorMessage;
      }
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const registerSubmit = async (data: TRegisterSchemaType) => {
    setLoading(true);
    try {
      await axiosInstanse.post(endpoints.auth.register, {
        email: data.email,
        password: data.password,
      });

      toast.success('Registration successful! Please login.');
      router.push('/login/');
    } catch (error: unknown) {
      console.error('Registration error:', error);
      let errorMessage = 'Registration failed. Please try again.';
      if (axios.isAxiosError(error)) {
        errorMessage = error.response?.data?.message || errorMessage;
      }
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return {
    loginSubmit,
    registerSubmit,
    loading,
  };
};

export default useAuth;
