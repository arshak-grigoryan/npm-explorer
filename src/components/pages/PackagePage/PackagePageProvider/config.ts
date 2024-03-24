import { earlestDate } from 'src/api/configs';

const dateNow = new Date();
const year = dateNow.getFullYear();
const month = dateNow.getMonth();
const day = dateNow.getDate();

export const downloadsPastDateOptions = [
  { label: '1 Month', value: new Date(year, month - 1, day).getTime() },
  { label: '3 Months', value: new Date(year, month - 3, day).getTime() },
  { label: '6 Months', value: new Date(year, month - 6, day).getTime() },
  { label: '1 Year', value: new Date(year - 1, month, day).getTime() },
  { label: '2 Years', value: new Date(year - 2, month, day).getTime() },
  { label: '5 Years', value: new Date(year - 5, month, day).getTime() },
  { label: 'All time', value: earlestDate.getTime() },
];

export const rangeOptions = [
  { label: 'Day', value: 1 },
  { label: '2 Days', value: 2 },
  { label: '3 Days', value: 3 },
  { label: '4 Days', value: 4 },
  { label: '5 Days', value: 5 },
  { label: '6 Days', value: 6 },
  { label: 'Week', value: 7 },
];
