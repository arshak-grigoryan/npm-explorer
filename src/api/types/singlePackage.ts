export type SinglePackageResponse = {
  readme: string;
  'dist-tags': {
    latest: string;
  };
  versions: Record<
    string,
    {
      readme: string;
      version: string;
    }
  >;
};
