import { PackageObject } from 'src/api/hooks/packages/useSearchPackages';

export type PackageListItemProps = {
  obj: PackageObject;
  searchString: string;
};

export type PackageListProps = {
  data: PackageObject[];
};
