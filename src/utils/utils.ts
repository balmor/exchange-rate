import { IFormInput } from '../components/CalcForm';
import { subBusinessDays, formatISO } from 'date-fns';
import { isHoliday } from 'poland-public-holidays';

export const formatData = ({
  amount,
  currency = '',
  dateStart = '',
  dateEnd = '',
}: IFormInput) => ({
  amount,
  currency: currency.toLowerCase(),
  prevStartBusinessDay: formatISODate(Number(dateStart)),
  prevEndBusinessDay: formatISODate(Number(dateEnd)),
});

const formatISODate = (date: number | Date) =>
  formatISO(omitPublicHolidays(subBusinessDays(date, 1)), {
    representation: 'date',
  });

const omitPublicHolidays = (date: number | Date) =>
  isHoliday(date)
    ? isHoliday(subBusinessDays(date, 1))
      ? subBusinessDays(date, 2) // in case when prev days was also public holiday
      : subBusinessDays(date, 1)
    : date;

export const priceFormat = (value: number, digit: number) =>
  new Intl.NumberFormat('pl-PL', {
    maximumFractionDigits: digit,
  }).format(value);
