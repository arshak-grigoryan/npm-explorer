import SearchPage from './components/pages/SearchPage';
import PackagePage from './components/pages/PackagePage';
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
          <Route path="/package/:name" element={<PackagePage />} />
        </Routes>
      </Router>
    </StyleProvider>
  );
}
