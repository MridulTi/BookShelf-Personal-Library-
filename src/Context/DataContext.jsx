// DataContext.js
import React, { createContext, useState, useContext } from 'react';

// Create the context
const DataContext = createContext();

// Create a provider component
export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const[Show,setShow]=useState(false)

  return (
    <DataContext.Provider value={{ data, setData ,Show,setShow}}>
      {children}
    </DataContext.Provider>
  );
};

// Create a custom hook to use the DataContext
export const useData = () => {
  return useContext(DataContext);
};
