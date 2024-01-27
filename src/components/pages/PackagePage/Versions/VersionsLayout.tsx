import { Box } from '@mui/material';
import { PerVersionDownloads } from 'src/api/hooks/downloads/useGetPackagePerVersionDownloads';
import { SinglePackage } from 'src/api/hooks/packages/useGetSinglePackage';
import colors from 'src/styles/colors';
import { text } from 'src/configs/configs';
import { HiddenHeading } from 'src/components/common/HiddenHeading/HiddenHeading';
import Typography from 'src/components/common/Typography/Typography';
import VersionList, { CurrentTagsStats, VersionHistoryStats } from './VersionList';

type VersionsProps = {
  data: { downloadsData: PerVersionDownloads['data']; packageData: SinglePackage['data'] };
};

export default function VersionsLayout({ data: { downloadsData, packageData } }: VersionsProps) {
  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    time: { modified, created, ...versions },
    'dist-tags': currentTags,
  } = packageData;

  const sortedVersionHistory = Object.entries(versions).sort((a, b) => {
    const aReleaseDate = b[1];
    const bReleaseDate = a[1];
    return new Date(aReleaseDate).getTime() - new Date(bReleaseDate).getTime();
  });

  const versionHostoryDownloadStats: VersionHistoryStats = [];

  sortedVersionHistory.forEach((value) => {
    const version = value[0];
    const downloads = downloadsData.downloads[version];
    const releaseDate = new Date(value[1]);
    versionHostoryDownloadStats.push([version, downloads, releaseDate]);
  });

  const currentTagsKeyValueSwaped: Record<string, string> = {};

  for (const key in currentTags) {
    currentTagsKeyValueSwaped[currentTags[key]] = key;
  }

  const currentTagsDownloadStats: CurrentTagsStats = [];

  versionHostoryDownloadStats.filter((stats) => {
    const tag = currentTagsKeyValueSwaped[stats[0]];
    if (tag) {
      const version = stats[0];
      const downloads = stats[1];
      currentTagsDownloadStats.push([version, downloads, tag]);
    }
  });

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        color: colors.c24,
      }}
    >
      <HiddenHeading as="h2">{text.version}</HiddenHeading>
      <Typography component={'h3'} sx={{ fontSize: '1.125rem', fontWeight: 600 }}>
        {text.currentTags}
      </Typography>
      <Box sx={{ display: 'flex' }}>
        <Box sx={{ fontWeight: 600 }}>{text.version}</Box>
        <Box sx={{ display: 'flex', flexGrow: 1 }}></Box>
        <Box sx={{ fontWeight: 600 }}>{text.downloadsLast7Days}</Box>
        <Box sx={{ display: 'flex', width: '33%' }}>
          <Box sx={{ display: 'flex', flexGrow: 1 }}></Box>
          <Box sx={{ fontWeight: 600 }}>{text.tag}</Box>
        </Box>
      </Box>
      <VersionList data={currentTagsDownloadStats} packageName={downloadsData.package} />
      <Typography component={'h3'} sx={{ fontSize: '1.125rem', fontWeight: 600 }}>
        {text.versionHistory}
      </Typography>
      <Box sx={{ display: 'flex' }}>
        <Box sx={{ fontWeight: 600 }}>{text.version}</Box>
        <Box sx={{ display: 'flex', flexGrow: 1 }}></Box>
        <Box sx={{ fontWeight: 600 }}>{text.downloadsLast7Days}</Box>
        <Box sx={{ display: 'flex', width: '33%' }}>
          <Box sx={{ display: 'flex', flexGrow: 1 }}></Box>
          <Box sx={{ fontWeight: 600 }}>{text.published}</Box>
        </Box>
      </Box>
      <VersionList data={versionHostoryDownloadStats} packageName={downloadsData.package} />
    </Box>
  );
}
