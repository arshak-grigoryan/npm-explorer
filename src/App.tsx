import StyleProvider from './styles/StyleProvider';
import AppRouter from './Router';

export default function App() {
  return (
    <StyleProvider>
      <AppRouter/>
    </StyleProvider>
  );
}
