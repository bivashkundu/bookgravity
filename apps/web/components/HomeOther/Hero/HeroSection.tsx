import React from 'react';
import { HeroBanner } from './HeroWrapper.styles';
import { BoxProps } from '@mui/material';
import Image from 'next/image';
import assest from '@/json/assest';

const HeroSection = ({ ...props }: BoxProps) => {
  return (
    <HeroBanner component='section' {...props}>
      <Image src={assest.banner2} alt='mainbanner' width={1920} height={600} />
    </HeroBanner>
  );
};

export default HeroSection;
