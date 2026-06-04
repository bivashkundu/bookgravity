'use client';

import { Stack, styled } from '@mui/material';

export const AuthStack = styled(Stack)`
  .auth-left-col {
    width: 50%;
    position: relative;
    height: 100vh;

    .auth-fig-sec {
      line-height: 0;
      width: 100%;
      height: 100%;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  .auth-right-col {
    width: 50%;
    height: 100vh;
    overflow: hidden auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 15px;

    .auth-right-innar {
      width: 100%;
      max-width: 496px;
      margin: 0 auto;
      background-color: ${({ theme }) => theme.palette.common.white};
      box-shadow: 0px 4px 18px rgba(75, 70, 92, 0.1);
      border-radius: 16px;
      padding: 24px;
    }

    .auth-topsec {
      text-align: center;
      margin-bottom: 20px;

      .logo-fig {
        line-height: 0;
      }

      h1 {
        font-size: 30px;
        font-weight: 700;
        margin: 20px 0 5px;
      }
    }

    .remember-stack {
      .MuiFormControlLabel-root {
        margin-right: 0;

        .MuiSvgIcon-root {
          font-size: 20px;
        }

        .MuiFormControlLabel-label {
          font-size: 14px;
          font-weight: 500;
        }
      }

      a {
        color: ${({ theme }) => theme.palette.primary.main};
        font-size: 14px;
        font-weight: 500;

        &:hover {
          color: ${({ theme }) => theme.palette.secondary.main};
        }
      }
    }
  }
`;
