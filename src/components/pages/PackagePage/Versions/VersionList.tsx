import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import colors from 'src/styles/colors';

export type VersionHistoryStats = [string, number, Date][];
export type CurrentTagsStats = [string, number, string][];

type VersionListProps = {
  data: VersionHistoryStats | CurrentTagsStats;
  packageName: string;
};

export default function VersionList({ data, packageName }: VersionListProps) {
  return (
    <ul style={{ margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {data.map((value) => {
        const version = value[0];
        const downloads = value[1];
        const releaseDateOrTag = value[2];
        return (
          <li
            key={version}
            style={{
              display: 'flex',
              color: colors.c23,
            }}
          >
            <div
              style={{
                fontSize: '1rem',
              }}
            >
              <Link to={`/package/${encodeURIComponent(packageName)}/${version}`} color={'inherit'}>
                {version}
              </Link>
            </div>
            <div
              style={{
                borderBottom: `1px dotted ${colors.c22}`,
                display: 'flex',
                alignSelf: 'end',
                flexGrow: 1,
                margin: '8px',
              }}
            ></div>
            <div>{downloads ? downloads.toLocaleString() : '*'}</div>
            <div
              style={{
                display: 'flex',
                width: '33%',
              }}
            >
              <div
                style={{
                  borderBottom: `1px dotted ${colors.c22}`,
                  display: 'flex',
                  alignSelf: 'end',
                  flexGrow: 1,
                  margin: '8px',
                }}
              ></div>
              <div
                style={{
                  textAlign: 'end',
                }}
              >
                {releaseDateOrTag instanceof Date
                  ? format(releaseDateOrTag, 'MMMM dd yyyy')
                  : releaseDateOrTag}
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
