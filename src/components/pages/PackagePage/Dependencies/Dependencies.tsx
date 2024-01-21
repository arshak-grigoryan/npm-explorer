import { Box, Divider, Typography } from '@mui/material';
import useGetSinglePackageVersion, {
  SinglePackageversion,
} from '../../../../api/hooks/packages/useGetSinglePackageVersion';
import FetchLayout from '../../../common/FetchLayout/FetchLayout';
import colors from '../../../../styles/colors';
import Link from '../../../common/Link/Link';

function Dep({ deps, label }: { deps: string[]; label: string }) {
  return (
    <Box sx={{ mt: 3 }}>
      <Typography sx={{ color: colors.c21, fontSize: '1.25rem', fontWeight: 500 }}>
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
function Deps({ data }: SinglePackageversion) {
  const deps = Object.keys(data.dependencies ?? {});
  const peerDeps = Object.keys(data.peerDependencies ?? {});
  const devDeps = Object.keys(data.devDependencies ?? {});

  return (
    <Box>
      <Dep deps={deps} label={`Dependencies (${deps.length})`} />
      <Dep deps={peerDeps} label={`Peer dependencies (${peerDeps.length})`} />
      <Dep deps={devDeps} label={`Dev dependencies (${devDeps.length})`} />
    </Box>
  );
}

export default function Dependency() {
  const res = useGetSinglePackageVersion();

  return (
    <FetchLayout
      state={res}
      slots={{
        Content: Deps,
      }}
    />
  );
}
