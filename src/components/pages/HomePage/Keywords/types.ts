export enum KeywordsEnum {
  'Front-End' = 'Front-End',
  'Back-End' = 'Back-End',
  CLI = 'CLI',
  Documentation = 'Documentation',
  CSS = 'CSS',
  Testing = 'Testing',
  IoT = 'IoT',
  Coverage = 'Coverage',
  Mobile = 'Mobile',
  Frameworks = 'Frameworks',
  Robotics = 'Robotics',
  Math = 'Math',
}

export type Keyword = {
  name: string;
  colors: {
    text: string;
    hover: string;
  };
  Icon: any;
};
