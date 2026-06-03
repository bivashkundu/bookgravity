import React from 'react';
import { HeroBanner } from './HeroWrapper.styles';
import { BoxProps } from '@mui/material';

const HeroSection = ({ ...props }: BoxProps) => {
  return <HeroBanner component='section' {...props}></HeroBanner>;
};

export default HeroSection;
