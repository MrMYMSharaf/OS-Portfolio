import React, { useState } from 'react';
import assets from './assets';

function App() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [openedApps, setOpenedApps] = useState([]);
  const [appVisibility, setAppVisibility] = useState({});

  // Function to toggle the visibility of the main menu
  const toggleMenu = () => {
    setMenuVisible(prevState => !prevState);
  };

  const openApp = (appName) => {
    if (!openedApps.includes(appName)) {
      setOpenedApps([...openedApps, appName]);
      setAppVisibility({ ...appVisibility, [appName]: true });
    } else {
      toggleAppVisibility(appName);
    }
  };

  const toggleAppVisibility = (appName) => {
    setAppVisibility({ ...appVisibility, [appName]: !appVisibility[appName] });
  };

  const closeApp = (appName) => {
    setOpenedApps(openedApps.filter(app => app !== appName));
    const newVisibility = { ...appVisibility };
    delete newVisibility[appName];
    setAppVisibility(newVisibility);
  };

  return (
    <>
      <assets.Window 
        menuVisible={menuVisible} 
        toggleMenu={toggleMenu} 
        openApp={openApp} 
        closeApp={closeApp}
        appVisibility={appVisibility}
      />
      <assets.TaskBar 
        toggleMenu={toggleMenu} 
        openedApps={openedApps} 
        toggleAppVisibility={toggleAppVisibility} 
      />
      {menuVisible && <assets.MainMenu />}
    </>
  );
}

export default App;
