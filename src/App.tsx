import SearchPage from './components/pages/SearchPage';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import StyleProvider from './styles/StyleProvider';

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
