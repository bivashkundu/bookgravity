import { Box, styled } from '@mui/material';

export const HeroBanner = styled(Box)`
  background-color: ${({ theme }) => theme.palette.grey?.[500]};
  height: 600px;
`;
