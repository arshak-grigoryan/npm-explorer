import { format } from 'date-fns';
import * as SC from './styles';
import { VersionListProps } from './types';

export default function VersionList({ data, packageName }: VersionListProps) {
  return (
    <SC.ListVersion>
      {data.map((value) => {
        const version = value[0];
        const downloads = value[1];
        const releaseDateOrTag = value[2];
        return (
          <SC.ListVersionItem key={version}>
            <SC.VersionLink to={`/package/${encodeURIComponent(packageName)}/${version}`}>
              {version}
            </SC.VersionLink>
            <SC.TextDivider />
            <SC.VersionDownloads>
              {downloads ? downloads.toLocaleString() : '*'}
            </SC.VersionDownloads>
            <SC.Coulmn3Container>
              <SC.TextDivider />
              <SC.Coulmn3>
                {releaseDateOrTag instanceof Date
                  ? format(releaseDateOrTag, 'MMMM dd yyyy')
                  : releaseDateOrTag}
              </SC.Coulmn3>
            </SC.Coulmn3Container>
          </SC.ListVersionItem>
        );
      })}
    </SC.ListVersion>
  );
}
