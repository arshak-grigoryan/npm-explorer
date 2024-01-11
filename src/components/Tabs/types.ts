import { ReactNode } from "react";

export type TabProps = {
  icon: ReactNode;
  label: string;
  colors: any;
  selected: boolean;
  onClick: () => void;
};

export enum TabsEnum {
  Readme = 'Readme',
  Code = 'Code',
  Dependencies = 'Dependencies',
  Dependents = 'Dependents',
  Versions = 'Versions',
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
