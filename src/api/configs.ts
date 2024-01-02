export const npmRegistry = 'https://registry.npmjs.org';
export const searchEndpoint = '/-/v1/search';
export const BASE_URL = `${npmRegistry}${searchEndpoint}`;
export const perPage = 20;
export const SEARCH_PARAMS = {
  text: 'text',
  popularity: 'popularity',
  quality: 'quality',
  maintenance: 'maintenance',
  from: 'from',
  page: 'page'
}
