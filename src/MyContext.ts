// MyContext.ts
import React from 'react';

export type Value = {
  zeroOK: boolean;
  oneOK: boolean;
};

interface MyContextType {
  value: Value;
  updateContextValue: (newValue: Value) => void;
}

const MyContext = React.createContext<MyContextType | undefined>(undefined);

export default MyContext;
