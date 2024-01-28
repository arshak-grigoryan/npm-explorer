import { PerVersionDownloads } from 'src/api/hooks/downloads/useGetPackagePerVersionDownloads';
import { SinglePackage } from 'src/api/hooks/packages/useGetSinglePackage';
import colors from 'src/styles/colors';
import { text } from 'src/configs/configs';
import { HiddenHeading } from 'src/components/common/HiddenHeading/HiddenHeading';
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
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        color: colors.c24,
      }}
    >
      <HiddenHeading as="h2">{text.version}</HiddenHeading>
      <h3 style={{ fontSize: '1.125rem', fontWeight: 600 }}>{text.currentTags}</h3>
      <div style={{ display: 'flex' }}>
        <div style={{ fontWeight: 600 }}>{text.version}</div>
        <div style={{ display: 'flex', flexGrow: 1 }}></div>
        <div style={{ fontWeight: 600 }}>{text.downloadsLast7Days}</div>
        <div style={{ display: 'flex', width: '33%' }}>
          <div style={{ display: 'flex', flexGrow: 1 }}></div>
          <div style={{ fontWeight: 600 }}>{text.tag}</div>
        </div>
      </div>
      <VersionList data={currentTagsDownloadStats} packageName={downloadsData.package} />
      <h3 style={{ fontSize: '1.125rem', fontWeight: 600 }}>{text.versionHistory}</h3>
      <div style={{ display: 'flex' }}>
        <div style={{ fontWeight: 600 }}>{text.version}</div>
        <div style={{ display: 'flex', flexGrow: 1 }}></div>
        <div style={{ fontWeight: 600 }}>{text.downloadsLast7Days}</div>
        <div style={{ display: 'flex', width: '33%' }}>
          <div style={{ display: 'flex', flexGrow: 1 }}></div>
          <div style={{ fontWeight: 600 }}>{text.published}</div>
        </div>
      </div>
      <VersionList data={versionHostoryDownloadStats} packageName={downloadsData.package} />
    </div>
  );
}
