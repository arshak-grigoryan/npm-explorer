import CssBaseline from '@mui/material/CssBaseline';
import './main.css';
import SearchPage from './components/pages/SearchPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import theme from './theme/theme';
import { ThemeProvider } from '@mui/material';

export default function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<SearchPage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}
