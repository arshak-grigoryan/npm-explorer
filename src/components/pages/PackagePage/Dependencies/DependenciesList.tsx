import { SinglePackageversion } from 'src/api/hooks/packages/useGetSinglePackageVersion';
import { text } from 'src/configs/configs';
import DependenciesListItem from './DependenciesListItem';

export default function DependenciesList({ data }: SinglePackageversion) {
  const deps = Object.keys(data.dependencies ?? {});
  const peerDeps = Object.keys(data.peerDependencies ?? {});
  const devDeps = Object.keys(data.devDependencies ?? {});

  return (
    <section>
      <DependenciesListItem deps={deps} label={text.dependencies(deps.length)} />
      <DependenciesListItem deps={peerDeps} label={text.peerDependencies(peerDeps.length)} />
      <DependenciesListItem deps={devDeps} label={text.devDependencies(devDeps.length)} />
    </section>
  );
}
