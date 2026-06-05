import { StyledComponent } from '@emotion/styled';
import { Box, BoxProps, styled, Theme } from '@mui/material';

export const BoxDeliveryShipping: StyledComponent<BoxProps & { theme?: Theme }> = styled(Box)`
  margin-top: 30px;

  .dl-box {
    padding: 15px;
    border: 2px solid ${({ theme }) => theme.palette.grey['300']};
    .icon {
      color: ${({ theme }) => theme.palette.primary.main};
      line-height: 0;

      svg {
        width: 42px;
        height: auto;
      }
    }

    .dl-content {
      width: calc(100% - 42px);
      padding-left: 10px;

      .MuiTypography-body1 {
        color: ${({ theme }) => theme.palette.text.secondary};
      }
    }
  }
`;
