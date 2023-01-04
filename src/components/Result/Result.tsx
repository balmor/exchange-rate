import React, { Fragment } from 'react';
import { darken } from '@mui/material/styles';
import styled from 'styled-components';
import { ICalcResultProps } from '../CalcResult';
import { CalculationResult } from '../CalculationResult';
import { ExchangeTable } from '../ExchangeTable';

const HeadResult = styled('h3')`
  text-align: center;
  text-transform: uppercase;
  padding: 3rem 0 0;
`;

const CourseResult = styled('h2')`
  margin: 5rem 0;
  padding: 1rem 0;
  color: ${({ theme }) => theme.secondary};
  text-align: center;
  border-top: 1px solid ${({ theme }) => darken(theme.secondary, 0.7)};
  border-bottom: 1px solid ${({ theme }) => darken(theme.secondary, 0.7)};
`;

export type ResultProps = {
  firstResult: ICalcResultProps;
  secondResult: ICalcResultProps;
  diffResult: string | undefined;
  currency: string;
};

export const Result: React.FC<ResultProps> = ({
  firstResult,
  secondResult,
  diffResult,
  currency,
}): JSX.Element => (
  <Fragment>
    <HeadResult>Wartość w ewidencji przychodów</HeadResult>
    <CalculationResult {...firstResult} currency={currency} />
    <ExchangeTable {...firstResult} />

    <HeadResult>Faktyczny wpływ</HeadResult>
    <CalculationResult {...secondResult} currency={currency} />
    <ExchangeTable {...secondResult} />

    <CourseResult>Róznica kursowa: {diffResult} PLN</CourseResult>
  </Fragment>
);
