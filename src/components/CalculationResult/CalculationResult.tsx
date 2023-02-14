import * as React from 'react';
import { ParagraphResult } from '.';
import { ICalcResultProps } from '../CalcResult';

export const CalculationResult: React.FC<ICalcResultProps> = ({
  amount,
  course,
  result,
  date,
  currency,
}) => {
  return (
    <ParagraphResult>
      Kurs {currency} z dnia {date}: {course}; {amount} * {course} = {result}{' '}
      PLN
    </ParagraphResult>
  );
};
