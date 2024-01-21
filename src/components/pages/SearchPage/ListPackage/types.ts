import { PackageObject } from "../../../../api/hooks/packages/useSearchPackages";

export type ListPackageProps = {
  obj: PackageObject;
  searchString: string;
  handleKeywordClick: (keyword:string) => void;
};
