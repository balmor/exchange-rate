import React from 'react';
import { MainContainer } from '.';
import { CalcForm } from '../CalcForm';
import { CalcResult } from '../CalcResult';

export const Section: React.FC = (): JSX.Element => (
  <MainContainer>
    <section>
      <CalcForm />
      <CalcResult />
    </section>
  </MainContainer>
);
