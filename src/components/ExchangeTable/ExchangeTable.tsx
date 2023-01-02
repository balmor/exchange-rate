import React from 'react';
import styled from 'styled-components';
import { ICalcResultProps } from '../CalcResult';

const StyledTable = styled('table')`
  border-spacing: 0;
`;

const StyledTh = styled('th')`
  border-left: 0.1rem solid #aaa;
  padding: 0.4rem 1.4rem;

  &:first-child {
    border-left: none;
  }
`;

const StyledTd = styled(StyledTh)`
  border-top: 0.1rem solid #aaa;
`;

export const ExchangeTable: React.FC<ICalcResultProps> = ({
  amount,
  course,
  result,
  date,
  currency,
}): JSX.Element => (
  <StyledTable>
    <thead>
      <tr>
        <StyledTh>wartość netto {currency}</StyledTh>
        <StyledTh>kurs {currency}/PLN</StyledTh>
        <StyledTh>wartość netto PLN</StyledTh>
        <StyledTh>kurs z dnia</StyledTh>
      </tr>
    </thead>
    <tbody>
      <tr>
        <StyledTd>{amount}</StyledTd>
        <StyledTd>{course}</StyledTd>
        <StyledTd>{result}</StyledTd>
        <StyledTd>{date}</StyledTd>
      </tr>
    </tbody>
  </StyledTable>
);
