import React, { useState } from 'react';
import assets from './assets';

function App() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [openedApps, setOpenedApps] = useState([]);

  // Function to toggle the visibility of the main menu
  const toggleMenu = () => {
    setMenuVisible(prevState => !prevState);
  };

  const openApp = (appName) => {
    if (!openedApps.includes(appName)) {
      setOpenedApps([...openedApps, appName]);
    }
  };

  const closeApp = (appName) => {
    setOpenedApps(openedApps.filter(app => app !== appName));
  };

  return (
    <>
      <assets.Window menuVisible={menuVisible} toggleMenu={toggleMenu} openApp={openApp} closeApp={closeApp} />
      <assets.TaskBar toggleMenu={toggleMenu} openedApps={openedApps} closeApp={closeApp} />
      {menuVisible && <assets.MainMenu />}
    </>
  );
}

export default App;
