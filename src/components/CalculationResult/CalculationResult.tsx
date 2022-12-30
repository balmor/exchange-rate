import * as React from 'react';
import styled from 'styled-components';
import { ICalcResultProps } from '../CalcResult';

const ParagraphResult = styled('p')`
  font-size: 1.4rem;
  color: #3e6da8;
`;

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
