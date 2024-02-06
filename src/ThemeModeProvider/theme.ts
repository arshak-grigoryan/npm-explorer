import { Theme } from '@emotion/react';

const lightColors: Theme['colors'] = {
  border: {
    primary: 'rgba(0,0,0,.1)',
    header: '#d2d2d2',
    paginationItem: '#cfcfcf',
    button: '#f2f2f2',
    keywordItem: '#efefef',
    installCmd: '#cccccc',
    installIcon: 'rgba(0,0,0,.5)',
    searchInput: '#f2f2f2',
    searchInputFocus: '#231f20',
  },
  typography: {
    primary: 'rgba(0,0,0,.8)',
    secondary: '#000000',
    tertiary: 'rgba(0,0,0,.9)',
    quaternary: 'rgba(0,0,0,.6)',
    quinary: 'rgba(0,0,0,.7)',
    dependencyHeading: '#111111',
    searchPlaceholder: '#777777',
    keywordItem: '#333333',
    packageSidebarHeading: '#757575',
    paginationItem: '#666666',
    publishDetails: '#666666',
    searchButton: '#ffffff',
  },
  background: {
    body: '#ffffff',
    packagesCount: '#f9f9f9',
    searchInput: '#f2f2f2',
    searchButton: '#231f20',
    homepageMain: '#fafafa',
    paginationItem: '#ffffff',
    paginationItemHover: '#f8f8f8',
    dropdownItem: '#efefef',
    dropdownItemActive: 'rgba(0,0,0,.1)',
  },
  divider: {
    primary: '#000000',
    secondary: 'rgba(0,0,0,.2)',
    tertiary: 'rgba(0,0,0,.1)',
    dependency: '#cccccc',
  },
  chip: {
    common: {
      def: 'rgba(0,0,0,.05)',
      hover: 'rgba(0,0,0,.1)',
    },
    match: {
      def: '#efe7fc',
      hover: '#e5d7fb',
    },
  },
  scoreBar: {
    def: 'rgba(0,0,0,0.1)',
  },
  shadow: {
    header: 'rgba(0,0,0,.1)',
  },
};

const darkColors: Theme['colors'] = {
  border: {
    primary: 'rgba(255,255,255,0.2)',
    header: '#2d2d2d',
    paginationItem: '#303030',
    button: '#0d0d0d',
    keywordItem: '#333333',
    installCmd: '#333333',
    installIcon: 'rgba(255, 255, 255, 0.5)',
    searchInput: '#2E2E2E',
    searchInputFocus: '#f1f1f1',
  },
  typography: {
    primary: 'rgba(255, 255, 255, 0.8)',
    secondary: '#ffffff',
    tertiary: 'rgba(255, 255, 255, 0.9)',
    quaternary: 'rgba(255, 255, 255, 0.6)',
    quinary: 'rgba(255, 255, 255, 0.7)',
    dependencyHeading: '#eeeeee',
    searchPlaceholder: '#888888',
    keywordItem: '#cccccc',
    packageSidebarHeading: '#8a8a8a',
    paginationItem: '#999999',
    publishDetails: '#999999',
    searchButton: '#000000',
  },
  background: {
    body: '#141414',
    packagesCount: '#1F1F1F',
    searchInput: '#2E2E2E',
    searchButton: '#f1f1f1',
    homepageMain: '#050505',
    paginationItem: '#141414',
    paginationItemHover: '#070707',
    dropdownItem: '#101010',
    dropdownItemActive: 'rgba(255,255,255,0.2)',
  },
  divider: {
    primary: '#f1f1f1',
    secondary: 'rgba(255,255,255,0.2)',
    tertiary: 'rgba(255,255,255,0.2)',
    dependency: '#cccccc',
  },
  chip: {
    common: {
      def: 'rgba(255,255,255,0.1)',
      hover: 'rgba(255,255,255,0.2)',
    },
    match: {
      def: 'rgba(255,255,255,0.2)',
      hover: 'rgba(255,255,255,0.3)',
    },
  },
  scoreBar: {
    def: 'rgba(255,255,255,0.1)',
  },
  shadow: {
    header: 'rgba(255,255,255,0.2)',
  },
};

const strictColors = {
  lineGradient: 'linear-gradient(139deg, #fb8817, #ff4b01, #c12127, #e02aff) 3',
  sortOptions: {
    p: '#29abe2',
    q: '#8956ff',
    m: '#cb3837',
  },
  divider: {
    c1: '#fab231',
    c2: '#fee933',
  },
  logo: {
    light: '',
    dark: '#C12127',
  },
};

const theme = {
  strictColors,
  width: {
    w1: '1536px',
    w2: '1200px',
  },
  medias: {
    tablet: '767px',
  },
};

const lightTheme = {
  ...theme,
  colors: lightColors,
};

const darkTheme = {
  ...theme,
  colors: darkColors,
};

export { lightTheme, darkTheme };
