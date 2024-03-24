import { format } from 'date-fns';
import { millisLimit } from '../configs';

export function getFormatedDate(mills: number) {
  return format(new Date(mills), 'yyyy-MM-dd');
}

export function getDateRanges(startMillis: number, endMillis: number) {
  const downloadDateRanges = [];
  const diff = endMillis - startMillis;
  const limitedDaysCount = Math.floor(diff / millisLimit);
  const remindedDays = diff % millisLimit;

  for (let i = 0; i < limitedDaysCount; i++) {
    downloadDateRanges.push({
      start: getFormatedDate(startMillis + millisLimit * i),
      end: getFormatedDate(startMillis + millisLimit * (i + 1)),
    });
  }

  downloadDateRanges.push({
    start: getFormatedDate(startMillis + millisLimit * limitedDaysCount),
    end: getFormatedDate(startMillis + millisLimit * limitedDaysCount + remindedDays),
  });

  return downloadDateRanges;
}
