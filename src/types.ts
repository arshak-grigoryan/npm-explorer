type Publisher = {
  username: string;
  email: string;
};

type Links = {
  npm: string;
  homepage: string;
  repository: string;
  bugs: string;
};

type Maintainers = Publisher[];

type Flags = {
  insecure: number;
};

type Score = {
  final: number;
  detail: {
    quality: number;
    popularity: number;
    maintenance: number;
  };
};

type Package = {
  name: string;
  scope: string;
  version: string;
  description: string;
  keywords: string[];
  date: string;
  links: Links;
  publisher: Publisher;
  maintainers: Maintainers;
};

type Objects = {
  package: Package;
  flags: Flags;
  score: Score;
  searchScore: number;
};

export type Response = {
  objects: Objects[];
  total: number;
  time: string;
};

export type PerPageData = { page: number; response: Response }[];
