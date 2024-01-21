export const npmRegistry = {
  base: 'https://registry.npmjs.org',
  search: '/-/v1/search',
};

export const NPM_SEARCH_URL = `${npmRegistry.base}${npmRegistry.search}`;

export const npmApi = {
  base: 'https://api.npmjs.org',
  downloadsPoint: '/downloads/point',
  downloadsRange: '/downloads/range',
  lastDay: '/last-day',
  lastWeek: '/last-week',
  lastMonth: '/last-month',
  versions: '/versions',
};

export const NPM_DOWNLOADS_POINT = `${npmApi.base}${npmApi.downloadsPoint}`;
export const NPM_DOWNLOADS_POINT_LAST_DAY = `${npmApi.base}${npmApi.downloadsPoint}${npmApi.lastDay}`;
export const NPM_DOWNLOADS_POINT_LAST_WEEK = `${npmApi.base}${npmApi.downloadsPoint}${npmApi.lastWeek}`;
export const NPM_DOWNLOADS_POINT_LAST_MONTH = `${npmApi.base}${npmApi.downloadsPoint}${npmApi.lastMonth}`;

export const NPM_DOWNLOADS_RANGE = `${npmApi.base}${npmApi.downloadsRange}`;

export const NPM_PER_VERSION_DOWNLOADS = `${npmApi.base}${npmApi.versions}`;

export const perPage = 20;
export const SEARCH_PARAMS = {
  text: 'text',
  popularity: 'popularity',
  quality: 'quality',
  maintenance: 'maintenance',
  from: 'from',
  page: 'page',
  activeTab: 'activeTab',
};
