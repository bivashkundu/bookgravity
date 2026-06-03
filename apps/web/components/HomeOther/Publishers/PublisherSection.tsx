import React from 'react';
import { BoxPublishers } from './PublisherWrapper.styles';
import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import { publisherslist } from './Publishermock.data';
import Image from 'next/image';
import { BoxProps } from '@mui/material';

const PublisherSection: React.FC<BoxProps> = props => {
  return (
    <BoxPublishers {...props} className='cmn-gap'>
      <Container fixed>
        <Grid container spacing={1.5}>
          {publisherslist.map((pub, i) => (
            <Grid size={{ lg: 2, xs: 12 }} key={i}>
              <Paper elevation={0} className='pub-paper'>
                <Box className='pub-fig'>
                  <Image src={pub.image} alt='Publisher' width={150} height={150} />
                </Box>
                <Typography variant='body1'>{pub.name}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </BoxPublishers>
  );
};

export default PublisherSection;
