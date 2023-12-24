import SearchPage from './components/pages/SearchPage';
import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom';
import StyleProvider from './styles/StyleProvider';
import { isDev } from './configs';

const Router = isDev ? BrowserRouter : HashRouter

export default function App() {
  return (
    <StyleProvider>
      <Router>
        <Routes>
          <Route path="/" element={<SearchPage />} />
        </Routes>
      </Router>
    </StyleProvider>
  );
}
