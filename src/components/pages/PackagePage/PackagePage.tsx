import Header from 'src/components/common/Header/Header';
import useUrlSearchParams from 'src/hooks/useUrlSearchParams';
import useUrlParams from 'src/hooks/useUrlParams';
import Tabs, { TabComponent } from './Tabs/Tabs';
import PackageSidebar from './PackageSidebar/PackageSidebar';
import * as SC from './styles';
import { PackagePageContextProvider } from './PackagePageProvider/PackagePageProvider';

export default function PackagePage() {
  const { activeTab } = useUrlSearchParams();
  const { name } = useUrlParams();

  return (
    <PackagePageContextProvider>
      <div>
        <Header />
        <main>
          <SC.WidthContainer>
            <SC.PackageShortInfo>
              <SC.PageHeading>{name}</SC.PageHeading>
            </SC.PackageShortInfo>
            <Tabs />
            <SC.ContentContainer>
              <SC.TabContentContainer>{TabComponent[activeTab]}</SC.TabContentContainer>
              <SC.PackageSidebarContainer>
                <PackageSidebar />
              </SC.PackageSidebarContainer>
            </SC.ContentContainer>
          </SC.WidthContainer>
        </main>
      </div>
    </PackagePageContextProvider>
  );
}
