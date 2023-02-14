import React, { Fragment } from 'react';
import { CourseResult, HeadResult } from '.';
import { ICalcResultProps } from '../CalcResult';
import { CalculationResult } from '../CalculationResult';
import { ExchangeTable } from '../ExchangeTable';

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
