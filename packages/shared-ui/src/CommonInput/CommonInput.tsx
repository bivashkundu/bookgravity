'use client';
import { Box, InputLabel, styled } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField, { StandardTextFieldProps } from '@mui/material/TextField';
import React, { forwardRef, useCallback, useState } from 'react';
import PasswordNonVisibilityIcon from '../Icons/PasswordNonVisibilityIcon';
import PasswordVisibilityIcon from '../Icons/PasswordVisibilityIcon';

const InputWrap = styled(Box)`
  .MuiInputLabel-root {
    font-size: 14px;
    color: ${({ theme }) => theme.palette.customColors?.dark};
    margin-bottom: 8px;
    font-weight: 500;
  }
  .MuiInputBase-root {
    background-color: ${({ theme }) => theme.palette.customColors?.bodyBg};
    border-radius: 12px;
    min-height: 50px;
    padding: 12px 18px;

    .MuiInputBase-input {
      font-size: 14px;
      color: ${({ theme }) => theme.palette.customColors?.dark};
      padding: 0;
      &::placeholder {
        color: ${({ theme }) => theme.palette.customColors?.dark} !important;
        opacity: 1;
        -webkit-text-fill-color: ${({ theme }) => theme.palette.customColors?.dark} !important;
      }

      &::-ms-input-placeholder {
        color: ${({ theme }) => theme.palette.customColors?.dark} !important;
        opacity: 1;
        -webkit-text-fill-color: ${({ theme }) => theme.palette.customColors?.dark} !important;
      }
    }

    .MuiInputAdornment-positionEnd {
      margin-left: 8px;
      .MuiIconButton-root {
        padding: 0;
      }
    }

    .MuiInputAdornment-positionStart {
      margin-right: 8px;
    }
  }

  fieldset {
    display: none;
  }
`;

type InputFieldCommonProps = StandardTextFieldProps & {
  isPassword?: boolean;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  labelName?: string;
};

const InputFieldCommon = forwardRef<HTMLInputElement, InputFieldCommonProps>(
  ({ isPassword = false, startAdornment, endAdornment,labelName, ...others }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = useCallback(() => {
      setShowPassword(prev => !prev);
    }, []);

    const handleMouseDownPassword = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    }, []);

    return (
      <InputWrap>
      {labelName && (<InputLabel>{labelName}</InputLabel>)}
      <TextField
        fullWidth
        variant={others.variant ?? 'outlined'}
        type={isPassword ? (showPassword ? 'text' : 'password') : others?.type}
        slotProps={{
          input: {
            inputRef: ref,
            startAdornment: startAdornment && (
              <InputAdornment position='start'>{startAdornment}</InputAdornment>
            ),
            endAdornment: isPassword ? (
              <InputAdornment position='end' className='password-icon'>
                <IconButton
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  disableRipple
                >
                  {showPassword ? <PasswordVisibilityIcon /> : <PasswordNonVisibilityIcon />}
                </IconButton>
              </InputAdornment>
            ) : (
              endAdornment && <InputAdornment position='end'>{endAdornment}</InputAdornment>
            ),
          },
        }}
        {...others}
      />
      </InputWrap>
    );
  }
);

export default InputFieldCommon;
