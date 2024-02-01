import useGetPackageDownloads from 'src/api/hooks/downloads/useGetPackageDownloads';
import FetchLayout from 'src/components/common/FetchLayout/FetchLayout';
import * as SC from './styles';
import { CountLayoutProps, Countprops } from './types';

function CountLayout({ data, title }: CountLayoutProps) {
  return (
    <div>
      <SC.Heading>{title}</SC.Heading>
      <SC.DownloadCount>{data.downloads.toLocaleString()}</SC.DownloadCount>
    </div>
  );
}

export default function Count({ url, title }: Countprops) {
  const res = useGetPackageDownloads(url);

  return (
    <FetchLayout
      res={res}
      slots={{
        Content: CountLayout,
      }}
      slotProps={{
        Content: { title },
      }}
    />
  );
}
