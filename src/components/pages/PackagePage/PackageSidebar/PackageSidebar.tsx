import { Link, useParams } from 'react-router-dom';
import useGetSinglePackage, { SinglePackage } from 'src/api/hooks/packages/useGetSinglePackage';
import GitIcon from 'src/assets/Git.svg?react';
import LinkIcon from 'src/assets/Link.svg?react';
import FetchLayout from 'src/components/common/FetchLayout/FetchLayout';
import colors from 'src/styles/colors';
import { text } from 'src/configs/configs';
import { HiddenHeading } from 'src/components/common/HiddenHeading/HiddenHeading';
import { Title, TitleContent } from './styles';
import WeeklyDownloads from './WeeklyDownloads';
import Installation from './Installation/Installation';

function PackageSidebarLayout(props: SinglePackage) {
  const { 'dist-tags': distTags, repository, homepage, license, name } = props.data;
  const { version } = useParams();
  const isLatestVersion = !version || (version && version === distTags.latest);
  const installVersion = version ? (isLatestVersion ? name : `${name}@${version}`) : name;

  const GithubUrl = repository && new URL(repository.url.replace('git+', '').replace('.git', ''));
  const HomepageUrl = homepage && new URL(homepage);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <HiddenHeading as={'h2'}>{text.packageSidebar}</HiddenHeading>
      <Installation version={installVersion} />
      {GithubUrl && (
        <div
          style={{
            borderBottom: `1px solid ${colors.c1}`,
          }}
        >
          <Title>{text.repository}</Title>
          <Link
            to={GithubUrl.href}
            target="_blank"
            style={{
              display: 'inline-block',
              marginTop: '8px',
              marginBottom: '16px',
            }}
          >
            <div
              style={{
                display: 'flex',
                gap: 1,
                alignItems: 'center',
                color: colors.c24,
              }}
            >
              <div style={{ display: 'flex' }}>
                <GitIcon style={{ width: 16, height: 16 }} />
              </div>
              <TitleContent>{GithubUrl.host + GithubUrl.pathname}</TitleContent>
            </div>
          </Link>
        </div>
      )}
      {HomepageUrl && (
        <div
          style={{
            borderBottom: `1px solid ${colors.c1}`,
          }}
        >
          <Title>{text.homepage}</Title>
          <Link
            to={HomepageUrl.href}
            target="_blank"
            style={{
              display: 'inline-block',
              marginTop: '8px',
              marginBottom: '16px',
            }}
          >
            <div
              style={{
                display: 'flex',
                gap: 1,
                alignItems: 'center',
                color: colors.c24,
                fontSize: '1.25rem',
              }}
            >
              <div style={{ display: 'flex' }}>
                <LinkIcon style={{ width: 16, height: 16 }} />
              </div>
              <TitleContent>{HomepageUrl.host + HomepageUrl.pathname}</TitleContent>
            </div>
          </Link>
        </div>
      )}
      {isLatestVersion && <WeeklyDownloads />}
      <div style={{ display: 'flex', borderBottom: `1px solid ${colors.c1}` }}>
        <div style={{ width: '50%' }}>
          <Title>{text.version}</Title>
          <TitleContent
            style={{
              marginTop: '8px',
              marginBottom: '16px',
              fontSize: '1.25rem',
            }}
          >
            {version ?? distTags.latest}
          </TitleContent>
        </div>
        <div style={{ width: '50%' }}>
          <Title>{text.license}</Title>
          <TitleContent
            style={{
              marginTop: '8px',
              marginBottom: '16px',
              fontSize: '1.25rem',
            }}
          >
            {license}
          </TitleContent>
        </div>
      </div>
      <div style={{ display: 'flex', borderBottom: `1px solid ${colors.c1}` }}>
        <div style={{ width: '50%' }}>
          <Title>{text.issues}</Title>
          <TitleContent
            style={{
              color: colors.c24,
              fontSize: '1.25rem',
              marginTop: '8px',
              marginBottom: '16px',
            }}
          ></TitleContent>
        </div>
        <div style={{ width: '50%' }}>
          <Title>{text.pullRequests}</Title>
          <TitleContent
            style={{
              color: colors.c24,
              fontSize: '1.25rem',
              marginTop: '8px',
              marginBottom: '16px',
            }}
          ></TitleContent>
        </div>
      </div>
      <div style={{ display: 'flex', borderBottom: `1px solid ${colors.c1}` }}>
        <Title>{text.lastPublish}</Title>
        <TitleContent
          style={{ color: colors.c24, fontSize: '1.25rem', marginTop: '8px', marginBottom: '16px' }}
        ></TitleContent>
      </div>
      <div style={{ display: 'flex', borderBottom: `1px solid ${colors.c1}` }}>
        <Title>{text.collaborators}</Title>
        <TitleContent
          style={{ color: colors.c24, fontSize: '1.25rem', marginTop: '8px', marginBottom: '16px' }}
        ></TitleContent>
      </div>
    </div>
  );
}

export default function PackageSidebar() {
  const res = useGetSinglePackage();

  return (
    <FetchLayout
      state={res}
      slots={{
        Content: PackageSidebarLayout,
      }}
    />
  );
}
