import { Stack, styled } from '@mui/material';

export const DashboardHeaderStyled = styled(Stack)`
  padding: 10px 24px;
  border-bottom: 1px solid rgba(67, 26, 26, 0.078);

  h1 {
    font-size: 30px;
    font-weight: 700;
    color: ${({ theme }) => theme.palette.secondary.main};
  }
`;
