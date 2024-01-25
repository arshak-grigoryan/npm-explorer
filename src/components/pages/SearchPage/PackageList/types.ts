import { PackageObject } from 'src/api/hooks/packages/useSearchPackages';

export type PackageListItemProps = {
  obj: PackageObject;
  searchString: string;
  handleKeywordClick: (keyword: string) => void;
};

export type PackageListProps = {
  data: PackageObject[];
};
