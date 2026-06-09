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

    .sidebar-menulist {
      display: block;

      &:not(:last-child) {
        margin-bottom: 2px;
      }
    }

    .cmn-listbtn {
      padding: 14px 12px;
      color: ${({ theme }) => theme.palette.text.secondary};
      border-radius: 10px;
      min-width: inherit;
      text-transform: capitalize;

      .MuiButton-startIcon {
        margin-left: 0px;
        margin-right: 8px;
      }

      .MuiButton-endIcon {
        margin-left: auto;
        margin-right: 0px;
      }

      &.active,
      &:hover {
        background-color: ${({ theme }) => theme.palette.primary.main};
        color: ${({ theme }) => theme.palette.common.white};
      }
    }

    .submenu_list {
      width: 100%;
      padding-left: 40px;
      padding-top: 16px;

      li {
        display: block;

        &.active {
          a {
            color: ${({ theme }) => theme.palette.primary.main};
          }
        }

        a {
          color: ${({ theme }) => theme.palette.text.secondary};
          display: block;

          &:hover {
            color: ${({ theme }) => theme.palette.primary.main};
          }
        }

        &:not(:last-child) {
          margin-bottom: 8px;
        }
      }
    }
  }
`;
