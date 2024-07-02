import React, { createContext, useState } from 'react';

// Create a context
export const AppContext = createContext();

// Create a provider component
export const AppProvider = ({ children }) => {
  const [appState, setAppState] = useState({
    showMyComputer: false,
    showCv: false,
    showBlog: false,
    showCertificate: false,
  });

  const toggleApp = (appName) => {
    setAppState(prevState => ({
      ...prevState,
      [appName]: !prevState[appName],
    }));
  };

  const closeApp = (appName) => {
    setAppState(prevState => ({
      ...prevState,
      [appName]: false,
    }));
  };

  return (
    <AppContext.Provider value={{ appState, toggleApp, closeApp }}>
      {children}
    </AppContext.Provider>
  );
};
