import React, { createContext, Dispatch, useMemo, useState } from 'react';
import { IFormInput } from '../components/CalcForm';

type FormProps = {
  children: React.ReactNode;
};

type IContextProps = {
  formData: IFormInput;
  setFormData: Dispatch<IFormInput>;
};

export const FormContext = createContext({} as IContextProps);

const FormProvider: React.FC<FormProps> = ({ children }): JSX.Element => {
  const [formData, setFormData] = useState({});
  const value = useMemo(() => ({ formData, setFormData }), [formData]);
  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

export default FormProvider;
