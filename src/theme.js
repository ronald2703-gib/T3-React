import { createTheme } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary: { main: '#111111', light: '#FFF1E6', dark: '#000000', contrastText: '#FFFFFF' },
    secondary: { main: '#FFA463', dark: '#F48A3F', light: '#FFD7B8', contrastText: '#111111' },
    background: { default: '#FFFFFF', paper: '#FFFFFF' },
    text: { primary: '#111111', secondary: '#5E5E5E' },
  },
  shape: { borderRadius: 16 },
  typography: {
    fontFamily: '"Poppins", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 800, lineHeight: 1.05, letterSpacing: -1.5 },
    h2: { fontWeight: 800 },
    h3: { fontWeight: 800, letterSpacing: -0.5 },
    h4: { fontWeight: 700 },
    h5: { fontWeight: 700 },
    h6: { fontWeight: 600 },
    button: { textTransform: 'none', fontWeight: 600 },
  },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: { borderRadius: 999, paddingInline: 22 },
        outlinedPrimary: { borderWidth: 2, '&:hover': { borderWidth: 2 } },
      },
    },
    MuiCard: {
      defaultProps: { elevation: 0 },
      styleOverrides: { root: { boxShadow: 'none', border: '1px solid #ECECEC', borderRadius: 20, transition: 'transform .25s' } },
    },
    MuiPaper: { styleOverrides: { rounded: { borderRadius: 20 } } },
    MuiChip: { styleOverrides: { root: { fontWeight: 600 } } },
    MuiLinearProgress: { styleOverrides: { root: { backgroundColor: '#F1F1F1' } } },
    MuiTab: { styleOverrides: { root: { fontWeight: 600 } } },
    MuiTabs: { defaultProps: { TabIndicatorProps: { sx: { height: 3, borderRadius: 3, bgcolor: 'secondary.main' } } } },
  },
});

export default theme;
