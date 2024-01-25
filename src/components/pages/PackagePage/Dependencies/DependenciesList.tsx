import { Box } from '@mui/material';
import { SinglePackageversion } from 'src/api/hooks/packages/useGetSinglePackageVersion';
import DependenciesListItem from './DependenciesListItem';

export default function DependenciesList({ data }: SinglePackageversion) {
  const deps = Object.keys(data.dependencies ?? {});
  const peerDeps = Object.keys(data.peerDependencies ?? {});
  const devDeps = Object.keys(data.devDependencies ?? {});

  return (
    <Box>
      <DependenciesListItem deps={deps} label={`Dependencies (${deps.length})`} />
      <DependenciesListItem deps={peerDeps} label={`Peer dependencies (${peerDeps.length})`} />
      <DependenciesListItem deps={devDeps} label={`Dev dependencies (${devDeps.length})`} />
    </Box>
  );
}
