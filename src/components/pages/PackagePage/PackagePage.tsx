import { useParams } from 'react-router-dom';
import Header from 'src/components/common/Header/Header';
import { maxWidth2 } from 'src/styles/configs';
import useGetSearchParams from 'src/hooks/useGetSearchParams';
import { ACTIVE_TAB } from 'src/api/configs';
import colors from 'src/styles/colors';
import Tabs, { TabComponent } from './Tabs/Tabs';
import PackageSidebar from './PackageSidebar/PackageSidebar';
import { TabsEnum } from './Tabs/types';

export default function PackagePage() {
  const activeTab: TabsEnum = useGetSearchParams(ACTIVE_TAB, TabsEnum.readme);
  const { name } = useParams();
  return (
    <div>
      <Header />
      <main>
        <div
          style={{
            maxWidth: maxWidth2,
            margin: 'auto',
            padding: '16px',
          }}
        >
          <div
            style={{
              marginTop: '16px',
              marginBottom: '16px',
            }}
          >
            <h1
              style={{
                fontSize: '1.5rem',
                fontWeight: 600,
                color: colors.c4,
              }}
            >
              {name}
            </h1>
          </div>

          <Tabs />
          <div style={{ display: 'flex' }}>
            <div style={{ width: 'calc(100% / 3 * 2)', marginRight: '16px', marginTop: '16px' }}>
              {TabComponent[activeTab]}
            </div>
            <div style={{ width: 'calc(100% / 3)', margin: '16px 16px 0 16px' }}>
              <PackageSidebar />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
