import { Repository } from 'src/api/github/useGetRepository';
import { RepositoryPulls } from 'src/api/github/useGetRepositoryPulls';
import { SinglePackage } from 'src/api/hooks/packages/useGetSinglePackage';
import { SinglePackageversion } from 'src/api/hooks/packages/useGetSinglePackageVersion';

export type PackageSidebarContainerProps = {
  data: {
    singlePackages: SinglePackage['data'];
    singlePackageVersion: SinglePackageversion['data'];
    repository: Repository['data'];
    repositoryPulls: RepositoryPulls['data'];
  };
};
