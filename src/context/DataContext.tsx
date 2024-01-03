// DataContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface DataProviderProps {
  children: ReactNode;
}

interface DataContextValue {
  data: any; 
  updateData: (newData: any) => void; 
}

const DataContext = createContext<DataContextValue | undefined>(undefined);

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [data, setData] = useState<any>({}); 

  const updateData = (newData: any) => {
    setData(newData);
  };

  const contextValue: DataContextValue = {
    data,
    updateData,
  };

  return (
    <DataContext.Provider value={contextValue}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = (): DataContextValue => {
  const context = useContext(DataContext);
  

  if (!context) {
    throw new Error('useDataContext must be used within a DataProvider');
  }

  return context;
};