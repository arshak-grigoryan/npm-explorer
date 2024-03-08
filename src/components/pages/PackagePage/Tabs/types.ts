import { ReactNode } from 'react';

export type TabProps = {
  icon: ReactNode;
  label: string;
  colors: any;
  selected: boolean;
  count: number;
};

export enum TabsEnum {
  readme = 'readme',
  code = 'code',
  dependencies = 'dependencies',
  dependents = 'dependents',
  versions = 'versions',
}

export type TabConfig = {
  name: string;
  colors: {
    text: string;
    background: string;
    hover: string;
    border: string;
  };
  Icon: any;
};
