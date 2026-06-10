import { Box, styled } from '@mui/material';

export const PublishersPageWrapper = styled(Box)`
  .publishers-table-wrapper {
    background: ${({ theme }) => theme.palette.common.white};
    border-radius: 12px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.06);
    overflow: hidden;
  }

  .pub-thumb {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.palette.grey[200]};
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.palette.common.white};

    img {
      width: 36px;
      height: 36px;
      object-fit: contain;
    }
  }

  .status-chip {
    font-size: 12px;
    font-weight: 600;
    height: 26px;
    border-radius: 6px;
  }

  .action-btns {
    display: flex;
    gap: 4px;

    .MuiIconButton-root {
      padding: 6px;
      border-radius: 8px;
      transition: all 0.2s ease;

      &:hover {
        background-color: ${({ theme }) => theme.palette.grey[100]};
      }
    }

    .edit-btn {
      color: ${({ theme }) => theme.palette.primary.main};
    }

    .delete-btn {
      color: ${({ theme }) => theme.palette.error.main};
    }
  }

  .empty-state {
    text-align: center;
    padding: 60px 20px;

    .empty-icon {
      font-size: 64px;
      color: ${({ theme }) => theme.palette.grey[300]};
      margin-bottom: 16px;
    }

    h3 {
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 8px;
    }

    p {
      color: ${({ theme }) => theme.palette.text.primary};
      font-size: 14px;
    }
  }
`;

export const PublisherDialogWrapper = styled(Box)`
  .dialog-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-top: 8px;
  }

  .image-preview {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-top: 4px;

    .preview-thumb {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      border: 2px solid ${({ theme }) => theme.palette.grey[200]};
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${({ theme }) => theme.palette.grey[50]};
      flex-shrink: 0;

      img {
        width: 48px;
        height: 48px;
        object-fit: contain;
      }
    }

    .preview-label {
      font-size: 12px;
      color: ${({ theme }) => theme.palette.text.primary};
    }
  }

  .status-switch-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .dialog-actions {
    display: flex;
    gap: 12px;
    justify-content: flex-end;
    padding-top: 8px;
  }
`;
