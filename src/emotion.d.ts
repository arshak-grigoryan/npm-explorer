import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: Record<string, string>;
    width: Record<string, string>;
    medias: {
      tablet: string;
    };
  }
}
