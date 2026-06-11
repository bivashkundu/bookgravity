import React from 'react';
import { BoxPublishers } from './PublisherWrapper.styles';
import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import Image from 'next/image';
import { BoxProps } from '@mui/material';
import SectionHeading from '@/components/SectionHeading';
import { getAllPublishers } from '@/api/functions/publisher.api';
import { getSectionHeading } from '@/api/functions/sectionHeading.api';
import { useQuery } from '@tanstack/react-query';

const PublisherSection: React.FC<BoxProps> = props => {
  const {
    data: publishers,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['publishers'],
    queryFn: getAllPublishers,
  });

  const { data: headingData } = useQuery({
    queryKey: ['sectionHeading', 'publishers'],
    queryFn: () => getSectionHeading('publishers'),
    retry: false,
  });

  return (
    <BoxPublishers {...props} className='cmn-gap'>
      <Container fixed>
        {headingData && (
          <SectionHeading
            mainHeading={headingData.mainHeading}
            subHeading={headingData.subHeading}
          />
        )}
        {isLoading ? (
          <Typography>Loading...</Typography>
        ) : error ? (
          <Typography>{error.message}</Typography>
        ) : !publishers || publishers.length === 0 ? (
          <Typography variant='body1' align='center' sx={{ color: 'text.secondary', py: 4 }}>
            No Data
          </Typography>
        ) : (
          <Grid container spacing={1.5}>
            {publishers.map((pub, i) => (
              <Grid size={{ lg: 2, xs: 12 }} key={i}>
                <Paper elevation={0} className='pub-paper'>
                  <Box className='pub-fig'>
                    {pub.image && (
                      <Image src={pub.image} alt='Publisher' width={150} height={150} />
                    )}
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
