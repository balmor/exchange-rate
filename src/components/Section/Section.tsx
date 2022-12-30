import React from 'react';
import { CalcForm } from '../CalcForm';
import { CalcResult } from '../CalcResult';
import { StyledContainer } from '../StyledContainer';

export const Section: React.FC = (): JSX.Element => (
  <StyledContainer>
    <section>
      <CalcForm />
      <CalcResult />
    </section>
  </StyledContainer>
);
