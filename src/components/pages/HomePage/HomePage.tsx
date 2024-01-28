import Header from 'src/components/common/Header/Header';
import colors from 'src/styles/colors';
import { maxWidth } from 'src/styles/configs';
import { text } from 'src/configs/configs';
import { HiddenHeading } from 'src/components/common/HiddenHeading/HiddenHeading';
import Downloads from './Downloads/Downloads';
import Keywords from './Keywords/Keywords';

export default function HomePage() {
  return (
    <div>
      <Header />
      <main
        style={{
          backgroundColor: colors.c11,
          padding: '16px',
        }}
      >
        <HiddenHeading as={'h1'}>{text.dashboard}</HiddenHeading>
        <div
          style={{
            maxWidth: maxWidth,
            padding: '0 16px',
            margin: 'auto',
          }}
        >
          <div
            style={{
              backgroundColor: colors.c13,
              border: `1px solid ${colors.c1}`,
              borderRadius: '4px',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '16px',
            }}
          >
            <Keywords />
            <Downloads />
          </div>
        </div>
      </main>
    </div>
  );
}
