import { AppBarProps, Stack, styled } from '@mui/material';
import Box from '@mui/material/Box';

export const HeaderWrap = styled(Box)<AppBarProps>`
  .MuiToolbar-root {
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 10px 0px;

    .headerLogo {
      line-height: 0;
    }
  }
`;

export const DownHeadr = styled(Stack)`
  background-color: ${({ theme }) => theme.palette.secondary.main};

  ul {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;

    li {
      width: auto;
      padding: 20px 11px;

      &:not(:last-child) {
        &::after {
          content: '';
          display: block;
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 1px;
          height: 12px;
          background-color: ${({ theme }) => theme.palette.common.white};
        }
      }

      a {
        color: ${({ theme }) => theme.palette.common.white};
        font-weight: 700;

        &:hover {
          color: ${({ theme }) => theme.palette.primary.main};
        }
      }
    }
  }
`;
