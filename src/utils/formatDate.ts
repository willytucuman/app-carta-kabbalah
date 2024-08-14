import { format } from 'date-fns';
import { toZonedTime } from 'date-fns-tz';

export const formatDateToArgentineTime = (dateString:Date) => {
  const date = new Date(dateString);
  const timeZone = 'America/Argentina/Buenos_Aires';
  const zonedDate = toZonedTime(date, timeZone);
  return format(zonedDate, 'dd/MM/yy HH:mm');
};