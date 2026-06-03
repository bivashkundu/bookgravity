import { PaletteMode } from '@mui/material';
import type { ThemeOptions } from '@mui/material/styles';
import { DM_Sans } from 'next/font/google';
import { palette } from './_palette';

/**
 * The function `MuiThemeOptions` returns a configuration object for the Material-UI theme based on the
 * provided mode (light or dark) and includes customizations for various components and typography.
 * @param {PaletteMode} mode - The `mode` parameter is of type `PaletteMode` and is used to determine
 * the color palette mode for the theme. The `PaletteMode` type can have two possible values: "light"
 * or "dark".
 * @returns The function `MuiThemeOptions` returns a `ThemeOptions` object.
 */

export const dmSans = DM_Sans({
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans',
});

export const MuiThemeOptions = (mode: PaletteMode): ThemeOptions => {
  return {
    palette: palette(mode),
    typography: {
      fontFamily: [`${dmSans.style.fontFamily}`].join(','),
      fontSize: 16,
      h1: {
        fontSize: '68px',
        lineHeight: '1.1em',
        fontWeight: '400',

        '@media(max-width:899px)': {
          fontSize: '22px',
        },
      },
      h2: {
        fontSize: '35px',
        lineHeight: '1.1em',
        fontWeight: '400',

        '@media(max-width:899px)': {
          fontSize: '22px',
        },
      },
      h3: {
        fontSize: '30px',
        lineHeight: '1.1em',
        fontWeight: '700',

        '@media(max-width:899px)': {
          fontSize: '18px',
        },
      },
      h4: {
        fontSize: '25px',
        lineHeight: '1.3',
        fontWeight: '700',
      },
      h5: {
        fontSize: '22px',
        lineHeight: '1.4',
        fontWeight: '600',
      },
      h6: {
        fontSize: '18px',
        lineHeight: '1.5',
        fontWeight: '600',
      },
      body1: {
        fontSize: '16px',
        lineHeight: '1.5em',
      },
      body2: {
        fontSize: '14px',
        lineHeight: '1.5em',
      },
      caption: {
        fontSize: '14px',
        lineHeight: '1.5em',
      },
    },

    components: {
      MuiSkeleton: {
        defaultProps: {
          animation: 'wave',
        },
      },
      MuiCard: {
        styleOverrides: {
          root: ({ _ownerState, theme }) => {
            return {
              borderRadius: '8px',
              boxShadow: `0px 4px 24px 0px ${theme.palette.background.paper}`,
            };
          },
        },
      },

      MuiMenuItem: {
        styleOverrides: {
          root: () => {
            return {
              '@media(max-width:899px)': {
                minHeight: '20px',
              },
            };
          },
        },
      },
      MuiMenu: {
        styleOverrides: {
          paper: ({ _theme }) => {
            return {
              overflow: 'visible !important',
              filter: 'drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.32))',
              marginTop: '6px',

              '@media(max-width:899px)': {
                marginTop: '0',
              },
            };
          },
          list: () => {
            return {
              paddingTop: '4px',
              paddingBottom: '4px',
            };
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: ({ ownerState }) => {
            return {
              fontSize: 16,
              lineHeight: '1.3',
              fontWeight: '600',
              padding: '15px 26px',
              minWidth: 'auto',
              borderRadius: 0,
              textTransform: 'capitalize',
              ...(ownerState.variant === 'contained' &&
                ownerState.color === 'primary' && {
                  background: palette(mode).primary.main,
                  color: palette(mode).common.white,
                  '&:hover': {
                    background: palette(mode).customColors.dark,
                    color: palette(mode).common.white,
                  },
                }),
            };
          },
        },
        defaultProps: {
          disableElevation: true,
          disableRipple: true,
        },
      },

      MuiBackdrop: {
        styleOverrides: {
          root: {
            // backdropFilter: "blur(4px)"
          },
        },
      },
      MuiTabs: {
        styleOverrides: {
          indicator: ({ theme }) => ({
            backgroundColor: theme?.palette?.primary.main,
          }),
        },
      },
    },
  };
};
