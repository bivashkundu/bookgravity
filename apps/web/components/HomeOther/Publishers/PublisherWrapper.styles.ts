import { Box, styled } from '@mui/material';
import type { BoxProps, Theme } from '@mui/material';
import type { StyledComponent } from '@emotion/styled';

export const BoxPublishers: StyledComponent<BoxProps & { theme?: Theme }> = styled(Box)`
  .pub-paper {
    text-align: center;

    .pub-fig {
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid ${({ theme }) => theme.palette.grey[300]};
      border-radius: 50%;
      max-width: 150px;
      max-height: 150px;
      aspect-ratio: 1/1;
      margin: 0 auto 10px;
      overflow: hidden;

      img {
        width: 100px;
        height: 100px;
        object-fit: contain;
      }
    }
  }
`;
