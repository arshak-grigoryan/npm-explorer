import { useParams } from 'react-router-dom';
import Header from 'src/components/common/Header/Header';
import useGetSearchParams from 'src/hooks/useGetSearchParams';
import { ACTIVE_TAB } from 'src/api/configs';
import Tabs, { TabComponent } from './Tabs/Tabs';
import PackageSidebar from './PackageSidebar/PackageSidebar';
import { TabsEnum } from './Tabs/types';
import * as SC from './styles';

export default function PackagePage() {
  const activeTab: TabsEnum = useGetSearchParams(ACTIVE_TAB, TabsEnum.readme);
  const { name } = useParams();

  return (
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
  );
}
