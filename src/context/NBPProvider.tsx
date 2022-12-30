import React, { createContext, useMemo, useState } from 'react';

type NBPProps = {
  children: React.ReactNode;
};

export const NBPContext = createContext([] as any);

const NBPProvider: React.FC<NBPProps> = ({ children }): JSX.Element => {
  const [course, setCourse] = useState([]);
  const value = useMemo(() => ({ course, setCourse }), [course]);
  return <NBPContext.Provider value={value}>{children}</NBPContext.Provider>;
};

export default NBPProvider;
