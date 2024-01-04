import Readme from '../../assets/Readme.svg?react';
import Code from '../../assets/Code.svg?react';
import Dependency from '../../assets/Dependency.svg?react';
import Dependents from '../../assets/Dependents.svg?react';
import Versions from '../../assets/versions.svg?react';

export enum TabsEnum {
  Readme = 'Readme',
  Code = 'Code',
  Dependencies = 'Dependencies',
  Dependents = 'Dependents',
  Versions = 'Versions',
}

export type Tab = {
  name: string;
  colors: {
    text: string;
    background: string;
    hover: string;
    border: string;
  };
  Icon: any;
};

export const TabsConfig: Tab[] = [
  {
    name: TabsEnum.Readme,
    colors: {
      text: '#886701',
      background: 'rgba(255, 205, 58, 0.2)',
      hover: 'rgb(255, 249, 229)',
      border: '#ffcd3a',
    },
    Icon: Readme,
  },
  {
    name: TabsEnum.Code,
    colors: {
      text: '#bc3433',
      background: 'rgba(203, 56, 55, 0.15)',
      hover: 'rgb(250, 235, 235)',
      border: '#bc3433',
    },
    Icon: Code,
  },
  {
    name: TabsEnum.Dependencies,
    colors: {
      text: 'rgb(120, 33, 117)',
      background: 'rgba(200, 54, 195, 0.2)',
      hover: 'rgb(250, 235, 249)',
      border: '#c836c3',
    },
    Icon: Dependency,
  },
  {
    name: TabsEnum.Dependents,
    colors: {
      text: 'rgb(41, 0, 138)',
      background: 'rgba(137, 86, 255, 0.2)',
      hover: 'rgb(237, 229, 255)',
      border: '#8956ff',
    },
    Icon: Dependents,
  },
  {
    name: TabsEnum.Versions,
    colors: {
      text: 'rgb(20, 106, 144)',
      background: 'rgba(41, 171, 226, 0.2)',
      hover: 'rgb(233, 246, 252)',
      border: '#29abe2',
    },
    Icon: Versions,
  },
];
