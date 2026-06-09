import React from 'react';
import { BoxPublishers } from './PublisherWrapper.styles';
import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import Image from 'next/image';
import { BoxProps } from '@mui/material';
import SectionHeading from '@/components/SectionHeading';
import { getAllPublishers } from '@/api/functions/publisher.api';
import { useSuspenseQuery } from '@tanstack/react-query';

const PublisherSection: React.FC<BoxProps> = props => {
  const {
    data: publishers,
    isLoading,
    error,
  } = useSuspenseQuery({
    queryKey: ['publishers'],
    queryFn: getAllPublishers,
  });

  return (
    <BoxPublishers {...props} className='cmn-gap'>
      <Container fixed>
        <SectionHeading mainHeading='Publishers' subHeading='Browse books from top publishers' />
        {isLoading ? (
          <Typography>Loading...</Typography>
        ) : error ? (
          <Typography>{error.message}</Typography>
        ) : (
          <Grid container spacing={1.5}>
            {publishers?.length > 0 &&
              publishers?.map((pub, i) => (
                <Grid size={{ lg: 2, xs: 12 }} key={i}>
                  <Paper elevation={0} className='pub-paper'>
                    <Box className='pub-fig'>
                      <Image src={pub.image} alt='Publisher' width={150} height={150} />
                    </Box>
                    <Typography variant='h3'>{pub.name}</Typography>
                  </Paper>
                </Grid>
              ))}
          </Grid>
        )}
      </Container>
    </BoxPublishers>
  );
};

export default PublisherSection;
