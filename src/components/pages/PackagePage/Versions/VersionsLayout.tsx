import { Box } from '@mui/material';
import { PerVersionDownloads } from '../../../../api/hooks/downloads/useGetPackagePerVersionDownloads';
import { SinglePackage } from '../../../../api/hooks/packages/useGetSinglePackage';
import VersionList, { CurrentTagsStats, VersionHistoryStats } from './VersionList';
import colors from '../../../../styles/colors';

type VersionsProps = {
  data: { downloadsData: PerVersionDownloads['data']; packageData: SinglePackage['data'] };
};

export default function VersionsLayout({ data: { downloadsData, packageData } }: VersionsProps) {
  const {
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

  for (let key in currentTags) {
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
        color: colors.c24
      }}
    >
      <Box sx={{ fontSize: '1.125rem', fontWeight: 600, mt: 2 }}>Current Tags</Box>
      <Box sx={{ display: 'flex' }}>
        <Box sx={{ fontWeight: 600 }}>Version</Box>
        <Box sx={{ display: 'flex', flexGrow: 1 }}></Box>
        <Box sx={{ fontWeight: 600 }}>Downloads (Last 7 Days)</Box>
        <Box sx={{ display: 'flex', width: '33%' }}>
          <Box sx={{ display: 'flex', flexGrow: 1 }}></Box>
          <Box sx={{ fontWeight: 600 }}>Tag</Box>
        </Box>
      </Box>
      <VersionList data={currentTagsDownloadStats} packageName={downloadsData.package}/>
      <Box sx={{ fontSize: '1.125rem', fontWeight: 600 }}>Version History</Box>
      <Box sx={{ display: 'flex' }}>
        <Box sx={{ fontWeight: 600 }}>Version</Box>
        <Box sx={{ display: 'flex', flexGrow: 1 }}></Box>
        <Box sx={{ fontWeight: 600 }}>Downloads (Last 7 Days)</Box>
        <Box sx={{ display: 'flex', width: '33%' }}>
          <Box sx={{ display: 'flex', flexGrow: 1 }}></Box>
          <Box sx={{ fontWeight: 600 }}>Published</Box>
        </Box>
      </Box>
      <VersionList data={versionHostoryDownloadStats} packageName={downloadsData.package}/>
    </Box>
  );
}
