import React, { useEffect, useState, useLayoutEffect } from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import assets from '../assets';
import ContextMenu from '../application/ContextMenu';
import Calculator  from '../application/Calculator';
import Certificate from '../application/windowAplication/Certificate';

// DraggableWindow component
const DraggableWindow = ({ dragConstraints, windowPosition, children }) => {
  return (
    <motion.div
      className="w-20 h-24 cursor-grab"
      drag
      dragMomentum={false}
      dragConstraints={dragConstraints}
      dragElastic={0}
      dragTransition={{ bounceDamping: 10 }}
      style={{ x: windowPosition.x, y: windowPosition.y, position: 'absolute', zIndex: 1 }}
    >
      {children}
    </motion.div>
  );
};

const Window = (props) => {
  const [dragConstraints, setDragConstraints] = useState({ left: 0, right: 0, top: 0, bottom: 0 });
  const [windowPosition, setWindowPosition] = useState({ x: 0, y: 0 });
  const [showContextMenu, setShowContextMenu] = useState(false); // State to control the visibility of the context menu
  const [contextMenuPosition, setContextMenuPosition] = useState({ x: 0, y: 0 }); // Position of the context menu
  const { menuVisible, toggleMenu} = props;

  const [clickCount, setClickCount] = useState(0);
  const [showCertificate, setShowCertificate] = useState(false);
  const [certificateIconBackgroundColor, setCertificateIconBackgroundColor] = useState("");


  const iconPositions = [
    { x: 0, y: 10 },
    { x: 0, y: 90 }, // Adjust x and y values for each icon
    { x: 0, y: 170 },
    { x: 0, y: 250 }
    // Add more positions as needed
  ];
  

  const handleDragStart = (event) => {
    event.preventDefault();
  };

  // Handle right-click event
const handleRightClick = (event) => {
  event.preventDefault();
  //console.log("Mouse coordinates:", event.clientX, event.clientY);
  setContextMenuPosition({ x: event.clientX, y: event.clientY }); // Set the position of the context menu
  setShowContextMenu(true); // Show the context menu
};



  // Close context menu when clicking outside
  const handleClickOutsideContextMenu = () => {
    setShowContextMenu(false);
  };

  useEffect(() => {
    window.addEventListener('click', handleClickOutsideContextMenu);

    return () => {
      window.removeEventListener('click', handleClickOutsideContextMenu);
    };
  }, []);

  useLayoutEffect(() => {
    function updateWindowDimensions() {
      const { innerWidth, innerHeight } = window;
      const windowWidth = 10; // Width of the window
      const windowHeight = 100; // Height of the window

      setDragConstraints({
        left: 0,
        right: Math.max(0, innerWidth - windowWidth),
        top: 0,
        bottom: Math.max(0, innerHeight - windowHeight)
      });
    }

    // Update dimensions when component mounts or when window is resized
    updateWindowDimensions();
    setWindowPosition({ x: 0, y: 0 });

    window.addEventListener('resize', updateWindowDimensions);
    window.addEventListener('resize', setWindowPosition);

    return () => {
      window.removeEventListener('resize', updateWindowDimensions);
      window.removeEventListener('resize', setWindowPosition);
    };
  }, []);

  const clickwindow = () => {
    if (menuVisible) {
      toggleMenu(); // Close the menu only if it's open
    }
  };

  const handleClickCertificate = () => {
    setClickCount(prevCount => {
      const newCount = prevCount + 1;
      
      if (newCount === 1) {
        setCertificateIconBackgroundColor("bg-orange-500 bg-opacity-25 w-full h-full");
      } else if (newCount === 2) {
        setCertificateIconBackgroundColor("");
        setShowCertificate(true);
      }

      return newCount === 2 ? 0 : newCount;
    });
  };
  

  

  
 return (
    <div className="relative h-screen bg-gray-200 overflow-hidden overflow-x-hidden overflow-y-clip" style={{backgroundImage: `url(${assets.bg0})`, backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%'}} onClick={clickwindow} onContextMenu={handleRightClick}>
      {/* DraggableWindows for icons */}
      {iconPositions.map((position, index) => (
        <DraggableWindow key={index} dragConstraints={dragConstraints} windowPosition={position}>
          {index === 0 && (
            <>
              <img src={assets.mycomputer} alt="mycomputer" onDragStart={handleDragStart} className='w-12 h-12 relative' />
              <span className='text-white text-xs ml-1 absolute'>My Computer</span>
            </>
          )}
          {index === 1 && (
            <>
              <img src={assets.RTF} alt="mycomputer" onDragStart={handleDragStart} className='w-12 h-12 relative' />
              <span className='text-white text-xs ml-1 absolute'>My CV</span>
            </>
          )}
          {index === 2 && (
            <>
              <img src={assets.Briefcase} alt="mycomputer" onDragStart={handleDragStart} className='w-12 h-12 relative' />
              <span className='text-white text-xs ml-1 absolute'>My Blog</span>
            </>
          )}
          {index === 3 && (
            <div onClick={handleClickCertificate} className={certificateIconBackgroundColor}>
              <img src={assets.Certificate} alt="mycomputer" onDragStart={handleDragStart} className='w-12 h-12 relative' />
              <span className='text-white text-xs ml-1 absolute'>Certificate</span>
            </div>
          )}
        </DraggableWindow>
      ))}

      {/* Render Certificate component outside of DraggableWindow */}
      <DraggableWindow dragConstraints={dragConstraints} windowPosition={windowPosition}>
        {showCertificate && (
          <div className="w-96">
            <Certificate />
          </div>
        )}
      </DraggableWindow>
      {/* Render ContextMenu */}
      {showContextMenu && <ContextMenu top={contextMenuPosition.y} left={contextMenuPosition.x} />}
    </div>
  );
};

export default Window;
