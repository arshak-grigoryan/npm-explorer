import { Box, Divider, Typography } from '@mui/material';
import Link from 'src/components/common/Link/Link';
import colors from 'src/styles/colors';

export default function DependenciesListItem({ deps, label }: { deps: string[]; label: string }) {
  return (
    <Box sx={{ mt: 3 }}>
      <Typography component={'h2'} sx={{ color: colors.c21, fontSize: '1.25rem', fontWeight: 500 }}>
        {label}
      </Typography>
      <Divider sx={{ my: 1 }} />
      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
        {deps.map((dep) => {
          return (
            <Link
              key={dep}
              to={`/package/${encodeURIComponent(dep)}`}
              sx={{
                color: colors.c9,
                '&:hover': { color: colors.c4 },
                transition: 'color .15s ease-in',
                fontSize: '1.25rem',
              }}
            >
              {dep}
            </Link>
          );
        })}
      </Box>
    </Box>
  );
}
