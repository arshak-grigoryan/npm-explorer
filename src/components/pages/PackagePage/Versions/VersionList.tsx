import { Box } from '@mui/material';
import { format } from 'date-fns';
import Link from 'src/components/common/Link/Link';
import colors from 'src/styles/colors';

export type VersionHistoryStats = [string, number, Date][];
export type CurrentTagsStats = [string, number, string][];

type VersionListProps = {
  data: VersionHistoryStats | CurrentTagsStats;
  packageName: string;
};

export default function VersionList({ data, packageName }: VersionListProps) {
  return (
    <Box
      component={'ul'}
      sx={{ margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}
    >
      {data.map((value) => {
        const version = value[0];
        const downloads = value[1];
        const releaseDateOrTag = value[2];
        return (
          <Box
            component={'li'}
            key={version}
            sx={{
              display: 'flex',
              color: colors.c23,
            }}
          >
            <Box
              sx={{
                fontSize: '1rem',
              }}
            >
              <Link
                to={`/package/${encodeURIComponent(packageName)}/${version}`}
                color={'inherit'}
                underline="always"
              >
                {version}
              </Link>
            </Box>
            <Box
              sx={{
                borderBottom: `1px dotted ${colors.c22}`,
                display: 'flex',
                alignSelf: 'end',
                flexGrow: 1,
                m: 1,
              }}
            ></Box>
            <Box>{downloads ? downloads.toLocaleString() : '*'}</Box>
            <Box
              sx={{
                display: 'flex',
                width: '33%',
              }}
            >
              <Box
                sx={{
                  borderBottom: `1px dotted ${colors.c22}`,
                  display: 'flex',
                  alignSelf: 'end',
                  flexGrow: 1,
                  m: 1,
                }}
              ></Box>
              <Box
                sx={{
                  textAlign: 'end',
                }}
              >
                {releaseDateOrTag instanceof Date
                  ? format(releaseDateOrTag, 'MMMM dd yyyy')
                  : releaseDateOrTag}
              </Box>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}
