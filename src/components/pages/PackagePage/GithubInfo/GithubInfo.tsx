import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import useGetSinglePackage, { SinglePackage } from 'src/api/hooks/packages/useGetSinglePackage';
import ArrowRightIcon from 'src/assets/Arrow-Right.svg?react';
import CopyIcon from 'src/assets/Copy.svg?react';
import GitIcon from 'src/assets/Git.svg?react';
import LinkIcon from 'src/assets/Link.svg?react';
import FetchLayout from 'src/components/common/FetchLayout/FetchLayout';
import Link from 'src/components/common/Link/Link';
import colors from 'src/styles/colors';
import { StyledDivider, Title, TitleContent } from './styles';
import WeeklyDownloads from './WeeklyDownloads';

function GithubInfo(props: SinglePackage) {
  const { 'dist-tags': distTags, repository, homepage, license, name } = props.data;
  const { version } = useParams();
  const isLatestVersion = version === distTags.latest;
  const installCmd = version ? (isLatestVersion ? name : `${name}@${version}`) : name;

  const GithubUrl = new URL(repository.url.replace('git+', '').replace('.git', ''));
  const HomepageUrl = new URL(homepage);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
      <Box>
        <Title>Install</Title>
        <Box
          sx={{
            border: `1px ${colors.c26} solid`,
            p: 1.5,
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            fontSize: '0.875rem',
          }}
        >
          <Box>
            <ArrowRightIcon style={{ width: 12.59, height: 12.59 }} />
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <code>{`npm i ${installCmd}`}</code>
          </Box>
          <Box>
            <CopyIcon
              style={{ width: 12.59, height: 12.59, cursor: 'pointer' }}
              onClick={() => navigator.clipboard.writeText(`npm i ${installCmd}` ?? '')}
            />
          </Box>
        </Box>
      </Box>
      <StyledDivider />
      <Box>
        <Title>Repository</Title>
        <Link to={GithubUrl.href} target="_blank">
          <Box
            sx={{
              display: 'flex',
              gap: 1,
              alignItems: 'center',
              color: colors.c24,
              fontSize: '1.25rem',
            }}
          >
            <Box>
              <GitIcon style={{ width: 16, height: 16 }} />
            </Box>
            <TitleContent
              sx={{
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {GithubUrl.host + GithubUrl.pathname}
            </TitleContent>
          </Box>
        </Link>
      </Box>
      <StyledDivider />
      <Box>
        <Title>Homepage</Title>
        <Link to={HomepageUrl.href} target="_blank">
          <Box
            sx={{
              display: 'flex',
              gap: 1,
              alignItems: 'center',
              color: colors.c24,
              fontSize: '1.25rem',
            }}
          >
            <Box>
              <LinkIcon style={{ width: 16, height: 16 }} />
            </Box>
            <TitleContent
              sx={{
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {HomepageUrl.host + HomepageUrl.pathname}
            </TitleContent>
          </Box>
        </Link>
      </Box>
      <StyledDivider />
      {isLatestVersion && <WeeklyDownloads />}
      <Box sx={{ display: 'flex' }}>
        <Box sx={{ width: '50%' }}>
          <Title>Version</Title>
          <TitleContent>{version ?? distTags.latest}</TitleContent>
        </Box>
        <Box sx={{ width: '50%' }}>
          <Title>License</Title>
          <TitleContent>{license}</TitleContent>
        </Box>
      </Box>
      <StyledDivider />
      <Box sx={{ display: 'flex' }}>
        <Box sx={{ width: '50%' }}>
          <Title>Issues</Title>
          <Box sx={{ color: colors.c24, fontSize: '1.25rem' }}></Box>
        </Box>
        <Box sx={{ width: '50%' }}>
          <Title>Pull Requests</Title>
          <Box sx={{ color: colors.c24, fontSize: '1.25rem' }}></Box>
        </Box>
      </Box>
      <StyledDivider />
      <Box sx={{ display: 'flex' }}>
        <Title>Last Publish</Title>
        <Box sx={{ color: colors.c24, fontSize: '1.25rem' }}></Box>
      </Box>
      <StyledDivider />
      <Box>
        <Title>Collaborators</Title>
        <Box sx={{ color: colors.c24, fontSize: '1.25rem' }}></Box>
      </Box>
    </Box>
  );
}

export default function GithubInfoContainer() {
  const res = useGetSinglePackage();

  return (
    <FetchLayout
      state={res}
      slots={{
        Content: GithubInfo,
      }}
    />
  );
}
