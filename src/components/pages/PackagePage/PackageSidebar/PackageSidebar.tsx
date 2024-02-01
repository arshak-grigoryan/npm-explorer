import { useParams } from 'react-router-dom';
import useGetSinglePackage, { SinglePackage } from 'src/api/hooks/packages/useGetSinglePackage';
import GitIcon from 'src/assets/Git.svg?react';
import LinkIcon from 'src/assets/Link.svg?react';
import FetchLayout from 'src/components/common/FetchLayout/FetchLayout';
import { text } from 'src/configs/text';
import { HiddenHeading } from 'src/components/common/HiddenHeading/HiddenHeading';
import * as SC from './styles';
import Installation from './Installation/Installation';
import WeeklyDownloads from './WeeklyDownloads/WeeklyDownloads';

function PackageSidebarContainer(props: SinglePackage) {
  const { 'dist-tags': distTags, repository, homepage, license, name } = props.data;
  const { version } = useParams();
  const isLatestVersion = !version || (version && version === distTags.latest);
  const installVersion = version ? (isLatestVersion ? name : `${name}@${version}`) : name;

  const GithubUrl = repository && new URL(repository.url.replace('git+', '').replace('.git', ''));
  const HomepageUrl = homepage && new URL(homepage);

  return (
    <SC.PackageSidebar>
      <HiddenHeading as={'h2'}>{text.packageSidebar}</HiddenHeading>
      <Installation version={installVersion} />
      {GithubUrl && (
        <SC.InfoBlock>
          <SC.Title>{text.repository}</SC.Title>
          <SC.ProjectLink to={GithubUrl.href} target="_blank">
            <SC.IconContainer>
              <GitIcon />
            </SC.IconContainer>
            <SC.TitleContent>{GithubUrl.host + GithubUrl.pathname}</SC.TitleContent>
          </SC.ProjectLink>
        </SC.InfoBlock>
      )}
      {HomepageUrl && (
        <SC.InfoBlock>
          <SC.Title>{text.homepage}</SC.Title>
          <SC.ProjectLink to={HomepageUrl.href} target="_blank">
            <SC.IconContainer>
              <LinkIcon />
            </SC.IconContainer>
            <SC.TitleContent>{HomepageUrl.host + HomepageUrl.pathname}</SC.TitleContent>
          </SC.ProjectLink>
        </SC.InfoBlock>
      )}
      {isLatestVersion && <WeeklyDownloads />}
      <SC.InfoBlock>
        <SC.SplitInfoBlock>
          <SC.Title>{text.version}</SC.Title>
          <SC.TitleContentOverride>{version ?? distTags.latest}</SC.TitleContentOverride>
        </SC.SplitInfoBlock>
        <SC.SplitInfoBlock>
          <SC.Title>{text.license}</SC.Title>
          <SC.TitleContentOverride>{license}</SC.TitleContentOverride>
        </SC.SplitInfoBlock>
      </SC.InfoBlock>
      <SC.InfoBlock>
        <SC.SplitInfoBlock>
          <SC.Title>{text.issues}</SC.Title>
          <SC.TitleContentOverride></SC.TitleContentOverride>
        </SC.SplitInfoBlock>
        <SC.SplitInfoBlock>
          <SC.Title>{text.pullRequests}</SC.Title>
          <SC.TitleContentOverride></SC.TitleContentOverride>
        </SC.SplitInfoBlock>
      </SC.InfoBlock>
      <SC.InfoBlock>
        <SC.Title>{text.lastPublish}</SC.Title>
        <SC.TitleContentOverride></SC.TitleContentOverride>
      </SC.InfoBlock>
      <SC.InfoBlock>
        <SC.Title>{text.collaborators}</SC.Title>
        <SC.TitleContentOverride></SC.TitleContentOverride>
      </SC.InfoBlock>
    </SC.PackageSidebar>
  );
}

export default function PackageSidebar() {
  const res = useGetSinglePackage();

  return (
    <FetchLayout
      res={res}
      slots={{
        Content: PackageSidebarContainer,
      }}
    />
  );
}
