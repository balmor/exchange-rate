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
  formattedStart: ICalcResultProps;
  formattedEnd: ICalcResultProps;
  diffResult: string | undefined;
  currency: string;
};

export const Result: React.FC<ResultProps> = ({
  formattedStart,
  formattedEnd,
  diffResult,
  currency,
}): JSX.Element => (
  <Fragment>
    <HeadResult>Wartość w ewidencji przychodów</HeadResult>
    <CalculationResult {...formattedStart} currency={currency} />
    <ExchangeTable {...formattedStart} />

    <HeadResult>Faktyczny wpływ</HeadResult>
    <CalculationResult {...formattedEnd} currency={currency} />
    <ExchangeTable {...formattedEnd} />

    <CourseResult>Róznica kursowa: {diffResult} PLN</CourseResult>
  </Fragment>
);
