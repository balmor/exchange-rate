import React, { createContext, useMemo, useState } from 'react';

type FormProps = {
  children: React.ReactNode;
};

export const FormContext = createContext({} as any);

const FormProvider: React.FC<FormProps> = ({ children }): JSX.Element => {
  const [formData, setFormData] = useState({});
  const value = useMemo(() => ({ formData, setFormData }), [formData]);
  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

export default FormProvider;
