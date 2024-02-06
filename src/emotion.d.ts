import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      border: {
        primary: string;
        header: string;
        paginationItem: string;
        button: string;
        keywordItem: string;
        installCmd: string;
        installIcon: string;
        searchInput: string;
        searchInputFocus: string;
      };
      typography: {
        primary: string;
        secondary: string;
        tertiary: string;
        quaternary: string;
        quinary: string;
        dependencyHeading: string;
        searchPlaceholder: string;
        keywordItem: string;
        packageSidebarHeading: string;
        paginationItem: string;
        publishDetails: string;
        searchButton: string;
      };
      background: {
        body: string;
        packagesCount: string;
        searchInput: string;
        searchButton: string;
        homepageMain: string;
        paginationItem: string;
        paginationItemHover: string;
        dropdownItem: string;
        dropdownItemActive: string;
      };
      divider: { primary: string; secondary: string; tertiary: string; dependency: string };
      chip: {
        common: {
          def: string;
          hover: string;
        };
        match: {
          def: string;
          hover: string;
        };
      };
      scoreBar: {
        def: string;
      };
      shadow: {
        header: string;
      };
    };
    strictColors: {
      lineGradient: string;
      sortOptions: {
        p: string;
        q: string;
        m: string;
      };
      divider: {
        c1: string;
        c2: string;
      };
      logo: {
        light: string;
        dark: string;
      };
    };
    width: Record<string, string>;
    medias: {
      tablet: string;
    };
  }
}
