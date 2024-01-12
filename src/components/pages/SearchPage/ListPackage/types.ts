import { PackageObject } from "../../../../api/hooks/useSearchPackages";

export type ListPackageProps = {
  obj: PackageObject;
  searchString: string;
  handleKeywordClick: (keyword:string) => void;
};
