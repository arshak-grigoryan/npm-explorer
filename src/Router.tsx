import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage/HomePage';
import SearchPage from './components/pages/SearchPage/SearchPage';
import PackagePage from './components/pages/PackagePage/PackagePage';

const Router = import.meta.env.DEV ? BrowserRouter : HashRouter;

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/package/:name/:version?" element={<PackagePage />} />
        <Route path="*" element={<>Not found</>} />
      </Routes>
    </Router>
  );
}
