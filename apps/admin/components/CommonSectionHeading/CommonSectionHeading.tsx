'use client';

import InputFieldCommon from '@/ui/CommonInput/CommonInput';
import { Box, Button, CircularProgress, Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getSectionHeading, upsertSectionHeading } from '@/api/functions/sectionHeading.api';
import toast from 'react-hot-toast';
import axios from 'axios';

interface CommonSectionHeadingProps {
  sectionKey: string;
}

const CommonSectionHeading: React.FC<CommonSectionHeadingProps> = ({ sectionKey }) => {
  const [mainHeading, setMainHeading] = React.useState('');
  const [subHeading, setSubHeading] = React.useState('');
  const queryClient = useQueryClient();

  const { data: headingData, isLoading } = useQuery({
    queryKey: ['sectionHeading', sectionKey],
    queryFn: () => getSectionHeading(sectionKey),
    retry: false,
  });

  useEffect(() => {
    if (headingData) {
      setMainHeading(headingData.mainHeading);
      setSubHeading(headingData.subHeading);
    }
  }, [headingData]);

  const mutation = useMutation({
    mutationFn: () => upsertSectionHeading({ sectionKey, mainHeading, subHeading }),
    onSuccess: () => {
      toast.success('Section heading saved successfully!');
      queryClient.invalidateQueries({ queryKey: ['sectionHeading', sectionKey] });
    },
    onError: (error: Error) => {
      let errorMessage = 'Failed to save section heading';
      if (axios.isAxiosError(error)) {
        errorMessage = error.response?.data?.message || errorMessage;
      } else {
        errorMessage = error.message || errorMessage;
      }
      toast.error(errorMessage);
    },
  });

  const handleSubmit = () => {
    if (!mainHeading.trim() || !subHeading.trim()) {
      toast.error('Both headings are required');
      return;
    }
    mutation.mutate();
  };

  return (
    <Box mb={3}>
      <Grid container spacing={2} alignItems='center'>
        <Grid size={{ lg: 4.5, xs: 12 }}>
          <InputFieldCommon
            placeholder='Enter Main Heading'
            value={mainHeading}
            onChange={e => setMainHeading(e.target.value)}
            disabled={isLoading}
          />
        </Grid>
        <Grid size={{ lg: 4.5, xs: 12 }}>
          <InputFieldCommon
            placeholder='Enter Sub Heading'
            value={subHeading}
            onChange={e => setSubHeading(e.target.value)}
            disabled={isLoading}
          />
        </Grid>
        <Grid size={{ lg: 3, xs: 12 }} sx={{ textAlign: 'right' }}>
          <Button
            variant='contained'
            onClick={handleSubmit}
            disabled={mutation.isPending || isLoading}
            startIcon={
              mutation.isPending ? <CircularProgress size={16} color='inherit' /> : undefined
            }
          >
            {mutation.isPending ? 'Saving...' : 'Submit'}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CommonSectionHeading;
