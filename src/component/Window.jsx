import React, { useEffect, useState, useLayoutEffect } from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import assets from '../assets';

// DraggableWindow component
const DraggableWindow = ({ dragConstraints, windowPosition, children }) => {
  return (
    <motion.div
      className="w-20 h-24 bg-orange-500 bg-opacity-25 cursor-grab"
      drag
      dragMomentum={false}
      dragConstraints={dragConstraints}
      dragElastic={0}
      dragTransition={{ bounceDamping: 10 }}
      style={{ x: windowPosition.x, y: windowPosition.y }}
    >
      {children}
    </motion.div>
  );
};

const Window = () => {
  const [dragConstraints, setDragConstraints] = useState({ left: 0, right: 0, top: 0, bottom: 0 });
  const [windowPosition, setWindowPosition] = useState({ x: 0, y: 0 });

  const handleDragStart = (event) => {
    event.preventDefault();
  };

  useLayoutEffect(() => {
    function updateWindowDimensions() {
      const { innerWidth, innerHeight } = window;
      const windowWidth = 200; // Width of the window
      const windowHeight = 280; // Height of the window

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

    return () => window.removeEventListener('resize', updateWindowDimensions);
  }, []);

  return (
    <div className="relative h-screen bg-gray-200" style={{backgroundImage: `url(${assets.bg0})`, backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%'}}>
      {/* DraggableWindow for My Computer */}
      <DraggableWindow dragConstraints={dragConstraints} windowPosition={windowPosition}>
        <img src={assets.mycomputer} alt="mycomputer" onDragStart={handleDragStart} className='w-16 h-16 relative' />
        <span className='text-white text-xs ml-1 absolute'>My Computer</span>
      </DraggableWindow>

      {/* DraggableWindow for My CV */}
      <DraggableWindow dragConstraints={dragConstraints} windowPosition={windowPosition} style={{marginTop: '3rem'}}>
        <img src={assets.RTF} alt="mycomputer" onDragStart={handleDragStart} className='w-16 h-16 relative' />
        <span className='text-white text-xs ml-1 absolute'>My CV</span>
      </DraggableWindow>

      {/* DraggableWindow for My Blog */}
      <DraggableWindow dragConstraints={dragConstraints} windowPosition={windowPosition} style={{marginTop: '3rem'}}>
        <img src={assets.Briefcase} alt="mycomputer" onDragStart={handleDragStart} className='w-16 h-16 relative' />
        <span className='text-white text-xs ml-1 absolute'>My Blog</span>
      </DraggableWindow>

      {/* DraggableWindow for Certificate */}
      <DraggableWindow dragConstraints={dragConstraints} windowPosition={windowPosition} style={{marginTop: '3rem'}}>
        <img src={assets.Certificate} alt="mycomputer" onDragStart={handleDragStart} className='w-16 h-16 relative' />
        <span className='text-white text-xs ml-1 absolute'>Certificate</span>
      </DraggableWindow>
    </div>
  );
};

export default Window;
