import Header from 'src/components/common/Header/Header';
import { text } from 'src/configs/text';
import { HiddenHeading } from 'src/components/common/HiddenHeading/HiddenHeading';
import Downloads from './Downloads/Downloads';
import Keywords from './Keywords/Keywords';
import * as SC from './styles';
import AllDownloads from './AllPackageDownloads/AllPackageDownloads';

export default function HomePage() {
  return (
    <div>
      <Header />
      <SC.Main>
        <HiddenHeading as={'h1'}>{text.dashboard}</HiddenHeading>
        <SC.SectionsContainer>
          <SC.TopSections>
            <Keywords />
            <Downloads />
          </SC.TopSections>
          <SC.BottomSection>
            <AllDownloads />
          </SC.BottomSection>
        </SC.SectionsContainer>
      </SC.Main>
    </div>
  );
}
