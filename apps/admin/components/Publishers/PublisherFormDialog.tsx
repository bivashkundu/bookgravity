'use client';

import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Image from 'next/image';
import { TPublisher, TPublisherFormData } from './Publishers.types';
import { PublisherDialogWrapper } from './PublishersPage.styles';
import InputFieldCommon from '@/ui/CommonInput/CommonInput';
import MuiModalWrapper from '@/ui/Modal/MuiModalWrapper';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createPublisher, updatePublisher } from '@/api/functions/publishers.api';
import toast from 'react-hot-toast';
import axios from 'axios';

const publisherSchema = yup.object().shape({
  name: yup
    .string()
    .required('Publisher name is required')
    .min(2, 'Name must be at least 2 characters'),
  image: yup.string().required('Image URL is required'),
});

interface IPublisherFormDialogProps {
  open: boolean;
  onClose: () => void;
  publisher?: TPublisher | null;
}

const PublisherFormDialog: React.FC<IPublisherFormDialogProps> = ({ open, onClose, publisher }) => {
  const isEditing = !!publisher;
  const queryClient = useQueryClient();

  const addMutation = useMutation({
    mutationFn: createPublisher,
    onSuccess: () => {
      toast.success('Publisher added successfully!');
      queryClient.invalidateQueries({ queryKey: ['publishers'] });
      onClose();
    },
    onError: (error: Error) => {
      let errorMessage = 'Failed to add publisher';
      if (axios.isAxiosError(error)) {
        errorMessage = error.response?.data?.message || errorMessage;
      } else {
        errorMessage = error.message || errorMessage;
      }
      toast.error(errorMessage);
    },
  });

  const editMutation = useMutation({
    mutationFn: (data: TPublisherFormData) => updatePublisher(publisher!._id!, data),
    onSuccess: () => {
      toast.success('Publisher updated successfully!');
      queryClient.invalidateQueries({ queryKey: ['publishers'] });
      onClose();
    },
    onError: (error: Error) => {
      let errorMessage = 'Failed to update publisher';
      if (axios.isAxiosError(error)) {
        errorMessage = error.response?.data?.message || errorMessage;
      } else {
        errorMessage = error.message || errorMessage;
      }
      toast.error(errorMessage);
    },
  });

  const isPending = addMutation.isPending || editMutation.isPending;

  const {
    control,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<TPublisherFormData>({
    resolver: yupResolver(publisherSchema),
    defaultValues: {
      name: '',
      image: '',
    },
  });

  React.useEffect(() => {
    if (open) {
      if (publisher) {
        reset({
          name: publisher.name,
          image: publisher.image,
        });
      } else {
        reset({
          name: '',
          image: '',
        });
      }
    }
  }, [open, publisher, reset]);

  const imageUrl = watch('image');

  const handleFormSubmit = (data: TPublisherFormData) => {
    if (isEditing && publisher?._id) {
      editMutation.mutate(data);
    } else {
      addMutation.mutate(data);
    }
  };

  return (
    <MuiModalWrapper
      open={open}
      onClose={onClose}
      title={isEditing ? 'Edit Publisher' : 'Add Publisher'}
    >
      <PublisherDialogWrapper>
        <form onSubmit={handleSubmit(handleFormSubmit)} className='dialog-form'>
          <Controller
            name='name'
            control={control}
            render={({ field }) => (
              <InputFieldCommon
                {...field}
                labelName='Publisher Name'
                placeholder='Enter publisher name'
                fullWidth
                error={!!errors.name}
                helperText={errors.name?.message}
              />
            )}
          />

          <Controller
            name='image'
            control={control}
            render={({ field }) => (
              <Box>
                <InputFieldCommon
                  {...field}
                  labelName='Image URL'
                  placeholder='Enter image URL or path (e.g. /assets/images/logo.png)'
                  fullWidth
                  error={!!errors.image}
                  helperText={errors.image?.message}
                />
                {imageUrl && (
                  <Box className='image-preview'>
                    <Box className='preview-thumb'>
                      <Image src={imageUrl} alt='Preview' width={48} height={48} />
                    </Box>
                    <Typography className='preview-label'>Image Preview</Typography>
                  </Box>
                )}
              </Box>
            )}
          />

          <Box className='dialog-actions'>
            <Button variant='outlined' onClick={onClose} color='secondary' disabled={isPending}>
              Cancel
            </Button>
            <Button variant='contained' type='submit' disabled={isPending}>
              {isPending ? 'Saving...' : isEditing ? 'Update' : 'Add Publisher'}
            </Button>
          </Box>
        </form>
      </PublisherDialogWrapper>
    </MuiModalWrapper>
  );
};

export default PublisherFormDialog;
