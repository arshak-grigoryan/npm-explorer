const NPM_REGISTRY = 'https://registry.npmjs.org';
const NPM_API = 'https://api.npmjs.org';
const NPM_JS = 'https://www.npmjs.com';

export const npmRegistry = {
  searchUrl: `${NPM_REGISTRY}/-/v1/search`,
  searchParams: {
    text: 'text',
    popularity: 'popularity',
    quality: 'quality',
    maintenance: 'maintenance',
    from: 'from',
  },
  getSinglePackageUrl: function (packageName: string) {
    return `${NPM_REGISTRY}/${packageName}`;
  },
  getSinglePackageVersionUrl: function (packageName: string, version?: string) {
    return `${NPM_REGISTRY}/${packageName}/${version ?? 'latest'}`;
  },
};

export const earlestDate = new Date(2015, 0, 10);
const dayMillis = 60 * 60 * 24 * 1000;
const daysLimit = 547;
export const millisLimit = dayMillis * daysLimit;

export const npmApi = {
  allPackagesLastDayDownloadsUrl: `${NPM_API}/downloads/point/last-day`,
  allPackagesLastWeekDownloadsUrl: `${NPM_API}/downloads/point/last-week`,
  allPackagesLastMonthDownloadsUrl: `${NPM_API}/downloads/point/last-month`,
  getLastWeekPerVersionDownloadsUrl: function (packageName: string) {
    return `${NPM_API}/versions/${encodeURIComponent(packageName)}/last-week`;
  },
  getAllPackageDownloadsRangeUrl: function (start: string, end: string) {
    return `${NPM_API}/downloads/range/${start}:${end}`;
  },
  getPackageDownloadsRangeUrl: function (start: string, end: string, packageName: string) {
    return `${NPM_API}/downloads/range/${start}:${end}/${packageName}`;
  },
};

export const PER_PAGE_PACKAGES_COUNT = 20;
export const PAGE = 'page';
export const ACTIVE_TAB = 'activeTab';

export const npmjs = {
  getpPackageVersionCodeFilesUrl: function (name: string, version: string) {
    return `${NPM_JS}/package/${name}/v/${version}/index`;
  },
  getPackageVersionFileCodeUrl: function (name: string, hex: string) {
    return `${NPM_JS}/package/${name}/file/${hex}`;
  },
};

const GITHUB_API = 'https://api.github.com';

export const githubApi = {
  getRepoApiUrl: function (owner: string, repo: string) {
    return `${GITHUB_API}/repos/${owner}/${repo}`;
  },
  getRepoPullsApiUrl: function (owner: string, repo: string) {
    return `${GITHUB_API}/repos/${owner}/${repo}/pulls`;
  },
};
