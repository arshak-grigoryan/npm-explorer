const NPM_REGISTRY = 'https://registry.npmjs.org';
const NPM_API = 'https://api.npmjs.org';

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

export const npmApi = {
  allPackagesLastDayDownloadsUrl: `${NPM_API}/downloads/point/last-day`,
  allPackagesLastWeekDownloadsUrl: `${NPM_API}/downloads/point/last-week`,
  allPackagesLastMonthDownloadsUrl: `${NPM_API}/downloads/point/last-month`,
  getLastWeekPerVersionDownloadsUrl: function (packageName: string) {
    return `${NPM_API}/versions/${encodeURIComponent(packageName)}/last-week`;
  },
};

export const PER_PAGE_PACKAGES_COUNT = 20;
export const PAGE = 'page';
export const ACTIVE_TAB = 'activeTab';
