import React from 'react';
import styled from 'styled-components';
import { ICalcResultProps } from '../CalcResult';

const StyledTable = styled('div')`
  border-spacing: 0;
  display: table;
  font-weight: bold;
`;

const StyledCell = styled('div')``;

const StyledContent = styled('div')`
  border-spacing: 0;
  display: table-row;

  ${StyledCell} {
    padding: 0.4rem 1.4rem;
    display: table-cell;
    border-left: 0.1rem solid ${({ theme }) => theme.third};
    border-top: 0.1rem solid ${({ theme }) => theme.third};
    text-align: center;

    &:first-child {
      border-left: none;
    }
  }

  &:first-child {
    border: none;

    ${StyledCell} {
      border-top: none;

      &:first-child {
        border-top: none;
      }
    }
  }

  @media (max-width: 35rem) {
    display: table-cell;
    border: none;
    border-left: 0.1rem solid ${({ theme }) => theme.third};

    ${StyledCell} {
      border: none;
      display: block;
      border-top: 0.1rem solid ${({ theme }) => theme.third};
      text-align: left;

      &:first-child {
        border-top: none;
      }
    }

    &:first-child {
      border-left: none;

      ${StyledCell} {
        border-top: 0.1rem solid ${({ theme }) => theme.third};
        text-align: right;

        &:first-child {
          border-top: none;
        }
      }
    }
  }
`;

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
