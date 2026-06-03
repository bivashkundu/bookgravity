import { Box, styled } from '@mui/material';

export const BoxPublishers = styled(Box)`
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
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    p {
      color: ${({ theme }) => theme.palette.secondary.main};
      font-weight: 700;
      font-size: 18px;
    }
  }
`;
