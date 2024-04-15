import React ,{ useState } from 'react';
import assets from './assets'; 



function App() {
  const [menuVisible, setMenuVisible] = useState(false); 

  // Function to toggle the visibility of the main menu
  const toggleMenu = () => {
    setMenuVisible(prevState => !prevState);
  };
  return (
    <>
       {/* <assets.ContextMenu/> */}
      <assets.Window menuVisible={menuVisible} toggleMenu={toggleMenu} />
      <assets.TaskBar toggleMenu={toggleMenu} />
      {
        menuVisible && <assets.MainMenu />
      }
      
    </>
  );
}

export default App;
