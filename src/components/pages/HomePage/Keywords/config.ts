import FrontEnd from 'src/assets/Front-End.svg?react';
import BackEnd from 'src/assets/Back-End.svg?react';
import CLI from 'src/assets/CLI.svg?react';
import Documentation from 'src/assets/Documentation.svg?react';
import CSS from 'src/assets/CSS.svg?react';
import Testing from 'src/assets/Testing.svg?react';
import IoT from 'src/assets/IoT.svg?react';
import Coverage from 'src/assets/Coverage.svg?react';
import Mobile from 'src/assets/Mobile.svg?react';
import Frameworks from 'src/assets/Frameworks.svg?react';
import Robotics from 'src/assets/Robotics.svg?react';
import Math from 'src/assets/Math.svg?react';
import { Keyword, KeywordsEnum } from './types';

export const KeywordConfig: Keyword[] = [
  {
    name: KeywordsEnum['Front-End'],
    colors: {
      text: 'rgb(41, 0, 138)',
      hover: 'rgba(137, 86, 255, 0.2)',
    },
    Icon: FrontEnd,
  },
  {
    name: KeywordsEnum['Back-End'],
    colors: {
      text: 'rgb(0, 97, 32)',
      hover: 'rgba(0, 198, 66, 0.2)',
    },
    Icon: BackEnd,
  },
  {
    name: KeywordsEnum.CLI,
    colors: {
      text: 'rgb(20, 106, 144)',
      hover: 'rgba(41, 171, 226, 0.2)',
    },
    Icon: CLI,
  },
  {
    name: KeywordsEnum.Documentation,
    colors: {
      text: 'rgb(126, 32, 32)',
      hover: 'rgba(203, 56, 55, 0.2)',
    },
    Icon: Documentation,
  },
  {
    name: KeywordsEnum.CSS,
    colors: {
      text: 'rgb(107, 80, 0)',
      hover: 'rgba(255, 205, 58, 0.2)',
    },
    Icon: CSS,
  },
  {
    name: KeywordsEnum.Testing,
    colors: {
      text: 'rgb(40, 11, 39)',
      hover: 'rgba(200, 54, 195, 0.2)',
    },
    Icon: Testing,
  },
  {
    name: KeywordsEnum.IoT,
    colors: {
      text: 'rgb(41, 0, 138)',
      hover: 'rgba(137, 86, 255, 0.2)',
    },
    Icon: IoT,
  },
  {
    name: KeywordsEnum.Coverage,
    colors: {
      text: 'rgb(0, 97, 32)',
      hover: 'rgba(0, 198, 66, 0.2)',
    },
    Icon: Coverage,
  },
  {
    name: KeywordsEnum.Mobile,
    colors: {
      text: 'rgb(20, 106, 144)',
      hover: 'rgba(41, 171, 226, 0.2)',
    },
    Icon: Mobile,
  },
  {
    name: KeywordsEnum.Frameworks,
    colors: {
      text: 'rgb(126, 32, 32)',
      hover: 'rgba(203, 56, 55, 0.2)',
    },
    Icon: Frameworks,
  },
  {
    name: KeywordsEnum.Robotics,
    colors: {
      text: 'rgb(107, 80, 0)',
      hover: 'rgba(255, 205, 58, 0.2)',
    },
    Icon: Robotics,
  },
  {
    name: KeywordsEnum.Math,
    colors: {
      text: 'rgb(40, 11, 39)',
      hover: 'rgba(200, 54, 195, 0.2)',
    },
    Icon: Math,
  },
];
