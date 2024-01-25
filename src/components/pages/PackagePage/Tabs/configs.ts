import ReadmeIcon from 'src/assets/Readme.svg?react';
import CodeIcon from 'src/assets/Code.svg?react';
import DependencyIcon from 'src/assets/Dependency.svg?react';
import DependentsIcon from 'src/assets/Dependents.svg?react';
import VersionsIcon from 'src/assets/Versions.svg?react';
import { TabConfig, TabsEnum } from './types';

export const TabsConfig: TabConfig[] = [
  {
    name: TabsEnum.readme,
    colors: {
      text: '#886701',
      background: 'rgba(255, 205, 58, 0.2)',
      hover: 'rgb(255, 249, 229)',
      border: '#ffcd3a',
    },
    Icon: ReadmeIcon,
  },
  {
    name: TabsEnum.code,
    colors: {
      text: '#bc3433',
      background: 'rgba(203, 56, 55, 0.15)',
      hover: 'rgb(250, 235, 235)',
      border: '#bc3433',
    },
    Icon: CodeIcon,
  },
  {
    name: TabsEnum.dependencies,
    colors: {
      text: 'rgb(120, 33, 117)',
      background: 'rgba(200, 54, 195, 0.2)',
      hover: 'rgb(250, 235, 249)',
      border: '#c836c3',
    },
    Icon: DependencyIcon,
  },
  {
    name: TabsEnum.dependents,
    colors: {
      text: 'rgb(41, 0, 138)',
      background: 'rgba(137, 86, 255, 0.2)',
      hover: 'rgb(237, 229, 255)',
      border: '#8956ff',
    },
    Icon: DependentsIcon,
  },
  {
    name: TabsEnum.versions,
    colors: {
      text: 'rgb(20, 106, 144)',
      background: 'rgba(41, 171, 226, 0.2)',
      hover: 'rgb(233, 246, 252)',
      border: '#29abe2',
    },
    Icon: VersionsIcon,
  },
];
