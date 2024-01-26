export const isDev = import.meta.env.DEV;

// TODO: keywords, tabs
export const text = {
  dashboard: 'Dashboard',
  searchResults: 'Search results',
  packageSidebar: 'Package Sidebar',
  searchPackages: 'Search packages',
  search: 'Search',
  discoverPackages: 'Discover packages',
  byTheNumbers: 'By the numbers',
  downloadsLastDay: 'Downloads · Last Day',
  downloadsLastWeek: 'Downloads · Last Week',
  downloadsLastMonth: 'Downloads · Last Month',
  countPackagesFound: (count: number) => `${count} packages found`,
  sortPackages: 'Sort Packages',
  sort: 'Sort',
  popularity: 'Popularity',
  quality: 'Quality',
  maintenance: 'Maintenance',
  install: 'Install',
  weeklyDownloads: 'Weekly Downloads',
  repository: 'Repository',
  homepage: 'Homepage',
  version: 'Version',
  license: 'License',
  issues: 'Issues',
  pullRequests: 'Pull Requests',
  lastPublish: 'Last Publish',
  collaborators: 'Collaborators',
  dependencies: (count: number) => `Dependencies (${count})`,
  peerDependencies: (count: number) => `Peer dependencies (${count})`,
  devDependencies: (count: number) => `Dev dependencies (${count})`,
  currentTags: 'Current Tags',
  downloadsLast7Days: 'Downloads (Last 7 Days)',
  tag: 'Tag',
  versionHistory: 'Version History',
  published: 'Published',
  versions: 'Versions',
};
