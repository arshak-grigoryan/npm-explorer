import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header/Header';
import SearchResult from './components/SearchResult/SearchResult';
import SearchContextProvider from './context/Search/provider';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './main.css';
const theme = createTheme({
  typography: {
    fontFamily: `sans-serif`,
  },
});

export default function App() {
  return (
    <SearchContextProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box>
          <Header />
          <Box component="main">
            <SearchResult />
          </Box>
        </Box>
      </ThemeProvider>
    </SearchContextProvider>
  );
}
