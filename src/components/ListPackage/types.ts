import { PackageObject } from '../../api/types/searchPackage';

export type ListPackageProps = {
  obj: PackageObject;
  searchString: string;
  handleKeywordClick: (keyword:string) => void;
};
