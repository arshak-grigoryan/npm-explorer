import { text } from 'src/configs/text';
import { HiddenHeading } from 'src/components/common/HiddenHeading/HiddenHeading';
import VersionList from './VersionList';
import * as SC from './styles';
import VersionListHeader from './VersionListHeader';
import { CurrentTagsStats, VersionHistoryStats, VersionsContainerProps } from './types';

export default function VersionsContainer({
  data: { downloadsData, packageData },
}: VersionsContainerProps) {
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
    <SC.VersionsContainer>
      <HiddenHeading as="h2">{text.version}</HiddenHeading>
      <SC.TagsHeading>{text.currentTags}</SC.TagsHeading>
      <VersionListHeader columns={[text.version, text.downloadsLast7Days, text.tag]} />
      <VersionList data={currentTagsDownloadStats} packageName={downloadsData.package} />
      <SC.TagsHeading css={{ marginTop: '16px' }}>{text.versionHistory}</SC.TagsHeading>
      <VersionListHeader columns={[text.version, text.downloadsLast7Days, text.published]} />
      <VersionList data={versionHostoryDownloadStats} packageName={downloadsData.package} />
    </SC.VersionsContainer>
  );
}
