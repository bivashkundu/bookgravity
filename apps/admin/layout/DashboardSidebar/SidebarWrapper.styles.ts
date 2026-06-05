import { Box, styled } from '@mui/material';

export const DashboardSidebarWrapper = styled(Box)`
  width: 260px;
  flex-basis: 260px;
  position: fixed;
  left: 0px;
  top: 0px;
  height: 100vh;
  overflow-y: auto;
  z-index: 5;
  border-right: 1px solid rgba(67, 26, 26, 0.078);

  .logo_sec {
    position: relative;
    padding: 24px 14px;
    display: flex;
    align-items: center;
    justify-content: center;

    a {
      line-height: 0;
    }
  }

  .sidebar_menu {
    padding: 0 24px;
    height: calc(100dvh - 166px);
    overflow-y: auto;
    margin-bottom: 20px;
    width: 100%;
    overflow-x: hidden;

    li {
      &:not(:last-child) {
        margin-bottom: 8px;
      }
      a,
      button {
        font-weight: 400;
        font-size: 16px;
        line-height: 1.5;
        width: 100%;
        justify-content: flex-start;
        padding: 14px 16px;
        color: ${({ theme }) => theme.palette.customColors?.placeText};
        border-radius: 10px;
        min-width: inherit;
        text-transform: capitalize;

        .MuiButton-startIcon {
          margin-left: 0px;
          margin-right: 12px;
        }
        &:hover {
          background: ${({ theme }) => theme.palette.primary.main};
          color: ${({ theme }) => theme.palette.common.white};
        }
      }
      &.active {
        a {
          background: ${({ theme }) => theme.palette.primary.main};
          color: ${({ theme }) => theme.palette.common.white};
        }
      }
    }
  }
`;
