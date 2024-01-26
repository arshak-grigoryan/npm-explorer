import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import useGetSinglePackage, { SinglePackage } from 'src/api/hooks/packages/useGetSinglePackage';
import GitIcon from 'src/assets/Git.svg?react';
import LinkIcon from 'src/assets/Link.svg?react';
import FetchLayout from 'src/components/common/FetchLayout/FetchLayout';
import Link from 'src/components/common/Link/Link';
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

  const GithubUrl = new URL(repository.url.replace('git+', '').replace('.git', ''));
  const HomepageUrl = homepage && new URL(homepage);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <HiddenHeading as={'h2'}>{text.packageSidebar}</HiddenHeading>
      <Installation version={installVersion} />
      <Box
        sx={{
          borderBottom: `1px solid ${colors.c1}`,
        }}
      >
        <Title>{text.repository}</Title>
        <Link
          to={GithubUrl.href}
          target="_blank"
          sx={{
            display: 'inline-block',
            marginTop: '8px',
            marginBottom: '16px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              gap: 1,
              alignItems: 'center',
              color: colors.c24,
            }}
          >
            <Box sx={{ display: 'flex' }}>
              <GitIcon style={{ width: 16, height: 16 }} />
            </Box>
            <TitleContent>{GithubUrl.host + GithubUrl.pathname}</TitleContent>
          </Box>
        </Link>
      </Box>
      {HomepageUrl && (
        <Box
          sx={{
            borderBottom: `1px solid ${colors.c1}`,
          }}
        >
          <Title>{text.homepage}</Title>
          <Link
            to={HomepageUrl.href}
            target="_blank"
            sx={{
              display: 'inline-block',
              marginTop: '8px',
              marginBottom: '16px',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                gap: 1,
                alignItems: 'center',
                color: colors.c24,
                fontSize: '1.25rem',
              }}
            >
              <Box sx={{ display: 'flex' }}>
                <LinkIcon style={{ width: 16, height: 16 }} />
              </Box>
              <TitleContent>{HomepageUrl.host + HomepageUrl.pathname}</TitleContent>
            </Box>
          </Link>
        </Box>
      )}
      {isLatestVersion && <WeeklyDownloads />}
      <Box sx={{ display: 'flex', borderBottom: `1px solid ${colors.c1}` }}>
        <Box sx={{ width: '50%' }}>
          <Title>{text.version}</Title>
          <TitleContent
            sx={{
              marginTop: '8px',
              marginBottom: '16px',
              fontSize: '1.25rem',
            }}
          >
            {version ?? distTags.latest}
          </TitleContent>
        </Box>
        <Box sx={{ width: '50%' }}>
          <Title>{text.license}</Title>
          <TitleContent
            sx={{
              marginTop: '8px',
              marginBottom: '16px',
              fontSize: '1.25rem',
            }}
          >
            {license}
          </TitleContent>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', borderBottom: `1px solid ${colors.c1}` }}>
        <Box sx={{ width: '50%' }}>
          <Title>{text.issues}</Title>
          <TitleContent
            sx={{ color: colors.c24, fontSize: '1.25rem', marginTop: '8px', marginBottom: '16px' }}
          ></TitleContent>
        </Box>
        <Box sx={{ width: '50%' }}>
          <Title>{text.pullRequests}</Title>
          <TitleContent
            sx={{ color: colors.c24, fontSize: '1.25rem', marginTop: '8px', marginBottom: '16px' }}
          ></TitleContent>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', borderBottom: `1px solid ${colors.c1}` }}>
        <Title>{text.lastPublish}</Title>
        <TitleContent
          sx={{ color: colors.c24, fontSize: '1.25rem', marginTop: '8px', marginBottom: '16px' }}
        ></TitleContent>
      </Box>
      <Box sx={{ display: 'flex', borderBottom: `1px solid ${colors.c1}` }}>
        <Title>{text.collaborators}</Title>
        <TitleContent
          sx={{ color: colors.c24, fontSize: '1.25rem', marginTop: '8px', marginBottom: '16px' }}
        ></TitleContent>
      </Box>
    </Box>
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
