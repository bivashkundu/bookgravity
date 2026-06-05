import { Box, styled } from '@mui/material';
import type { BoxProps, Theme } from '@mui/material';
import type { StyledComponent } from '@emotion/styled';

export const HeroBanner: StyledComponent<BoxProps & { theme?: Theme }> = styled(Box)`
  background-color: ${({ theme }) => theme.palette.grey?.[500]};
  height: 600px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
