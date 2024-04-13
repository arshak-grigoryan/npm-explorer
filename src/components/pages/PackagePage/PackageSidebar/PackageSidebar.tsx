import { useContext } from 'react';
import { format } from 'date-fns';
import GitIcon from 'src/assets/Git.svg?react';
import LinkIcon from 'src/assets/Link.svg?react';
import FetchLayout from 'src/components/common/FetchLayout/FetchLayout';
import { text } from 'src/configs/text';
import { HiddenHeading } from 'src/components/common/HiddenHeading/HiddenHeading';
import useUrlParams from 'src/hooks/useUrlParams';
import { PackagePageContext } from '../PackagePageProvider/PackagePageProvider';
import { humanFileSize } from '../Code/utils';
import * as SC from './styles';
import Installation from './Installation/Installation';
import WeeklyDownloads from './WeeklyDownloads/WeeklyDownloads';
import { PackageSidebarContainerProps } from './types';

function PackageSidebarContainer(props: PackageSidebarContainerProps) {
  const {
    'dist-tags': distTags,
    repository,
    homepage,
    license,
    name,
    maintainers,
    time,
  } = props.data.singlePackages;
  const {
    dist: { fileCount, unpackedSize },
  } = props.data.singlePackageVersion;
  const { open_issues_count } = props.data.repository;
  const pulls = props.data.repositoryPulls;

  const { version } = useUrlParams();
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
              <GitIcon
                css={{
                  '& g': {
                    fill: 'currentcolor',
                  },
                }}
              />
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
          <SC.Title>{text.unpackedSize}</SC.Title>
          <SC.TitleContentOverride>{humanFileSize(unpackedSize)}</SC.TitleContentOverride>
        </SC.SplitInfoBlock>
        <SC.SplitInfoBlock>
          <SC.Title>{text.totalFiles}</SC.Title>
          <SC.TitleContentOverride>{fileCount}</SC.TitleContentOverride>
        </SC.SplitInfoBlock>
      </SC.InfoBlock>
      <SC.InfoBlock>
        <SC.SplitInfoBlock>
          <SC.Title>{text.issues}</SC.Title>
          <SC.TitleContentOverride>{open_issues_count}</SC.TitleContentOverride>
        </SC.SplitInfoBlock>
        <SC.SplitInfoBlock>
          <SC.Title>{text.pullRequests}</SC.Title>
          <SC.TitleContentOverride>{pulls.length}</SC.TitleContentOverride>
        </SC.SplitInfoBlock>
      </SC.InfoBlock>
      <SC.InfoBlock>
        <SC.Title>{text.lastPublish}</SC.Title>
        <SC.TitleContentOverride>
          {format(new Date(time.modified), 'MMMM dd yyyy HH:mm:ss')}
        </SC.TitleContentOverride>
      </SC.InfoBlock>
      <SC.InfoBlock>
        <SC.Title>{text.collaborators}</SC.Title>
        {maintainers.map(({ name }) => (
          <SC.TitleContentOverride key={name}>{name}</SC.TitleContentOverride>
        ))}
      </SC.InfoBlock>
    </SC.PackageSidebar>
  );
}

export default function PackageSidebar() {
  const { singlePackagesRes, singlePackageVersionRes, repositoryRes, repositoryPullsRes } =
    useContext(PackagePageContext);

  return (
    <FetchLayout
      res={{
        loading: !(
          singlePackagesRes.loading === false &&
          singlePackageVersionRes.loading === false &&
          repositoryRes.loading === false &&
          repositoryRes.data !== null &&
          repositoryPullsRes.loading === false
        ),
        error:
          singlePackagesRes.error ||
          singlePackageVersionRes.error ||
          repositoryRes.error ||
          repositoryPullsRes.error,
        data: {
          singlePackages: singlePackagesRes.data,
          singlePackageVersion: singlePackageVersionRes.data,
          repository: repositoryRes.data,
          repositoryPulls: repositoryPullsRes.data,
        },
      }}
      slots={{
        Content: PackageSidebarContainer,
      }}
    />
  );
}
