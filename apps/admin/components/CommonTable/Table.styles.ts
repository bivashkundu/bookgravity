import { TableContainer, styled } from '@mui/material';

export const CommonTableWrapper = styled(TableContainer)`
  background: ${({ theme }) => theme.palette.common.white};
  border-radius: 12px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.06);
  overflow: hidden;

  .MuiTableHead-root {
    background: ${({ theme }) => theme.palette.grey[50]};

    .MuiTableCell-head {
      font-weight: 600;
      font-size: 14px;
      color: ${({ theme }) => theme.palette.text.secondary};
      border-bottom: 1px solid ${({ theme }) => theme.palette.grey[200]};
      padding: 14px 16px;
      white-space: nowrap;
    }
  }

  .MuiTableBody-root {
    .MuiTableRow-root {
      transition: background-color 0.2s ease;

      &:hover {
        background-color: ${({ theme }) => theme.palette.grey[50]};
      }

      &:last-child .MuiTableCell-root {
        border-bottom: none;
      }
    }

    .MuiTableCell-root {
      padding: 12px 16px;
      font-size: 14px;
      border-bottom: 1px solid ${({ theme }) => theme.palette.grey[100]};
    }
  }
`;
