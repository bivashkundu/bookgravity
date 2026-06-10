'use client';

import React from 'react';
import { Box, Button, IconButton, TableCell, TableRow, Tooltip, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Image from 'next/image';
import { TPublisher } from './Publishers.types';
import { PublishersPageWrapper } from './PublishersPage.styles';
import PublisherFormDialog from './PublisherFormDialog';
import CommonTable, { TableColumn } from '@/components/CommonTable/CommonTable';
import { useMutation, useQueryClient, useSuspenseQuery } from '@tanstack/react-query';
import { getAllPublishers, deletePublisher } from '@/api/functions/publishers.api';
import toast from 'react-hot-toast';
import axios from 'axios';
import CommonSectionHeading from '../CommonSectionHeading/CommonSectionHeading';

const PublishersPage = () => {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const [editingPublisher, setEditingPublisher] = React.useState<TPublisher | null>(null);
  const queryClient = useQueryClient();

  const { data: publishers } = useSuspenseQuery({
    queryKey: ['publishers'],
    queryFn: getAllPublishers,
  });

  const deleteMutation = useMutation({
    mutationFn: deletePublisher,
    onSuccess: () => {
      toast.success('Publisher deleted successfully!');
      queryClient.invalidateQueries({ queryKey: ['publishers'] });
    },
    onError: (error: Error) => {
      let errorMessage = 'Failed to delete publisher';
      if (axios.isAxiosError(error)) {
        errorMessage = error.response?.data?.message || errorMessage;
      } else {
        errorMessage = error.message || errorMessage;
      }
      toast.error(errorMessage);
    },
  });

  const columns: TableColumn[] = [
    { label: '#', width: 60 },
    { label: 'Image', width: 80 },
    { label: 'Name' },
    { label: 'Actions', width: 120, align: 'center' },
  ];

  const handleOpenAdd = () => {
    setEditingPublisher(null);
    setIsDialogOpen(true);
  };

  const handleOpenEdit = (publisher: TPublisher) => {
    setEditingPublisher(publisher);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setEditingPublisher(null);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this publisher?')) {
      deleteMutation.mutate(id);
    }
  };

  return (
    <PublishersPageWrapper>
      <CommonSectionHeading sectionKey='publishers' />

      {publishers.length === 0 ? (
        <Box className='publishers-table-wrapper'>
          <Box className='empty-state'>
            <MenuBookIcon className='empty-icon' />
            <Typography variant='h3'>No Publishers Yet</Typography>
            <Typography variant='body2' component='p'>
              Click &quot;Add Publisher&quot; to add your first publisher.
            </Typography>
          </Box>
        </Box>
      ) : (
        <CommonTable columns={columns}>
          {publishers.map((pub, index) => (
            <TableRow key={pub._id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>
                <Box className='pub-thumb'>
                  {pub.image && <Image src={pub.image} alt={pub.name} width={36} height={36} />}
                </Box>
              </TableCell>
              <TableCell>
                <Typography variant='body2' fontWeight={500}>
                  {pub.name}
                </Typography>
              </TableCell>

              <TableCell align='center'>
                <Box className='action-btns'>
                  <Tooltip title='Edit'>
                    <IconButton className='edit-btn' onClick={() => handleOpenEdit(pub)}>
                      <EditOutlinedIcon fontSize='small' />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title='Delete'>
                    <IconButton
                      className='delete-btn'
                      onClick={() => pub._id && handleDelete(pub._id)}
                    >
                      <DeleteOutlineIcon fontSize='small' />
                    </IconButton>
                  </Tooltip>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </CommonTable>
      )}

      <Box sx={{ mt: 2, textAlign: 'center' }}>
        <Button variant='contained' startIcon={<AddIcon />} onClick={handleOpenAdd}>
          Add Publisher
        </Button>
      </Box>

      <PublisherFormDialog
        open={isDialogOpen}
        onClose={handleCloseDialog}
        publisher={editingPublisher}
      />
    </PublishersPageWrapper>
  );
};

export default PublishersPage;
