import { Box, Typography, Chip } from '@mui/material';
import { format } from 'date-fns';
import colors from 'src/styles/colors';
import Link from 'src/components/common/Link/Link';
import Score from '../Score/Score';
import { PackageListItemProps } from './types';

export default function PackageListItem({
  obj,
  searchString,
  handleKeywordClick,
}: PackageListItemProps) {
  const { package: foundPackage, score } = obj;
  const { name, description, keywords, publisher, date, version } = foundPackage;

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 8px',
        marginBottom: '16px',
        pb: 1,
        gap: 4,
        borderBottom: `1px solid ${colors.c1}`,
      }}
    >
      <Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
          <Link
            underline="hover"
            to={`/package/${encodeURIComponent(name)}`}
            color={colors.c4}
            sx={{
              '&.MuiLink-underlineHover': {
                cursor: 'pointer',
              },
            }}
          >
            <Typography
              component="h3"
              sx={{
                fontWeight: 600,
                fontSize: '1.25rem',
                display: 'inline',
              }}
            >
              {name}
            </Typography>
          </Link>
          {name === searchString && (
            <Chip
              label="exact match"
              sx={{
                '&.MuiChip-root': {
                  backgroundColor: colors.c3,
                  borderRadius: '4px',
                  padding: '4px 8px',
                  height: 'auto',
                },
                '& .MuiChip-label': {
                  px: 0,
                  fontSize: '0.875rem',
                  color: colors.c2,
                  lineHeight: '1rem',
                },
              }}
            />
          )}
        </Box>
        <Typography
          sx={{
            paddingTop: '4px',
            paddingBottom: '4px',
            marginTop: '4px',
            fontSize: '1rem',
          }}
        >
          {description}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
            marginTop: '8px',
            marginBottom: '8px',
          }}
        >
          {keywords?.map((key, i) => (
            <Chip
              key={key + i}
              label={key}
              onClick={() => handleKeywordClick(key)}
              sx={{
                '&.MuiChip-root': {
                  backgroundColor: colors.c5,
                  borderRadius: '4px',
                  padding: '4px 8px',
                  height: 'auto',
                  '&:hover': {
                    backgroundColor: colors.c1,
                    cursor: 'pointer',
                  },
                },
                '& .MuiChip-label': {
                  px: 0,
                  fontSize: '0.875rem',
                  color: colors.c2,
                  lineHeight: '1rem',
                },
              }}
            />
          ))}
        </Box>
        <Box
          sx={{
            gap: '4px',
            display: 'flex',
            alignItems: 'center',
            marginTop: '4px',
            marginBottom: '4px',
          }}
        >
          <Typography
            component={'span'}
            sx={{
              fontSize: '0.875rem',
              fontWeight: 600,
            }}
          >
            {publisher.username}
          </Typography>
          <Typography
            sx={{
              fontSize: '0.875rem',
              color: colors.c6,
            }}
            component={'span'}
          >{`published ${version} • ${format(new Date(date), 'MMMM dd yyyy')}`}</Typography>
        </Box>
      </Box>
      <Score
        score={[
          {
            name: 'p',
            value: score.detail.popularity,
            color: colors.c7,
          },
          {
            name: 'q',
            value: score.detail.quality,
            color: colors.c8,
          },
          {
            name: 'm',
            value: score.detail.maintenance,
            color: colors.c9,
          },
        ]}
        max={1}
      />
    </Box>
  );
}
