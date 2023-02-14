import React from 'react';
import { StyledCell, StyledContent, StyledTable } from '.';
import { ICalcResultProps } from '../CalcResult';

export const ExchangeTable: React.FC<ICalcResultProps> = ({
  amount,
  course,
  result,
  date,
  currency,
}): JSX.Element => (
  <>
    <StyledTable>
      <StyledContent>
        <StyledCell>wartość netto {currency}</StyledCell>
        <StyledCell>kurs {currency}/PLN</StyledCell>
        <StyledCell>wartość netto PLN</StyledCell>
        <StyledCell>kurs z dnia</StyledCell>
      </StyledContent>
      <StyledContent>
        <StyledCell>{amount}</StyledCell>
        <StyledCell>{course}</StyledCell>
        <StyledCell>{result}</StyledCell>
        <StyledCell>{date}</StyledCell>
      </StyledContent>
    </StyledTable>
  </>
);
