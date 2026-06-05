'use client';
import BookIcon from '@/ui/Icons/BookIcon';
import { Box, styled, Typography } from '@mui/material';
import React from 'react';

export interface ISectionHeadingProps {
  mainHeading: string;
  subHeading: string;
}

const SectionHeading = ({ mainHeading, subHeading }: ISectionHeadingProps) => {
  return (
    <HeadingWrap>
      <span className='icon'>
        <BookIcon IconHeight='30' IconWidth='30' />
      </span>
      <Box className='heading-content'>
        <Typography variant='h2'>{mainHeading}</Typography>
        <Typography variant='body1'>{subHeading}</Typography>
      </Box>
    </HeadingWrap>
  );
};

export default SectionHeading;

export const HeadingWrap = styled(Box)`
  margin-bottom: 40px;
  text-align: center;
`;
