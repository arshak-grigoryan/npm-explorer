import AppRouter from './Router';
import { ThemeModeProvider } from './ThemeModeProvider/ThemeMode';

export default function App() {
  return (
    <ThemeModeProvider>
      <AppRouter />
    </ThemeModeProvider>
  );
}
