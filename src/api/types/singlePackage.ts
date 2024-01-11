export type SinglePackageResponse = {
  versions: Record<
    string,
    {
      readme: string;
    }
  >;
};
