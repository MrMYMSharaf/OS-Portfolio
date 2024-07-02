import React from 'react';
import Desktop from './window/Desktop';

const Window = ({ menuVisible, toggleMenu, openApp, closeApp, appVisibility }) => {
  return (
    <Desktop
      menuVisible={menuVisible}
      toggleMenu={toggleMenu}
      openApp={openApp}
      closeApp={closeApp}
      appVisibility={appVisibility}
    />
  );
};

export default Window;
