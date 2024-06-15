import React, { useEffect, useState, useLayoutEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import assets from '../assets';
import ContextMenu from '../application/ContextMenu';

const DraggableWindow = ({ dragConstraints, windowPosition, children, className }) => {
  return (
    <motion.div
      className={className}
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
  const [showContextMenu, setShowContextMenu] = useState(false);
  const [contextMenuPosition, setContextMenuPosition] = useState({ x: 0, y: 0 });
  const { menuVisible, toggleMenu } = props;

  const [clickCount, setClickCount] = useState({ 0: 0, 1: 0, 2: 0, 3: 0 });
  const [showCertificate, setShowCertificate] = useState(false);
  const [showCv, setShowCv] = useState(false);
  const [showBlog, setShowBlog] = useState(false);
  const [iconBackgroundColor, setIconBackgroundColor] = useState({
    0: "",
    1: "",
    2: "",
    3: ""
  });

  const iconRefs = useRef([]);
  const windowRef = useRef(null);

  const iconPositions = [
    { x: 0, y: 10 },
    { x: 0, y: 90 },
    { x: 0, y: 170 },
    { x: 0, y: 250 }
  ];

  const handleDragStart = (event) => {
    event.preventDefault();
  };

  const handleRightClick = (event) => {
    event.preventDefault();
    setContextMenuPosition({ x: event.clientX, y: event.clientY });
    setShowContextMenu(true);
  };

  const handleClickOutsideContextMenu = () => {
    setShowContextMenu(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      let clickedOutside = true;

      iconRefs.current.forEach((icon, index) => {
        if (icon && icon.contains(event.target)) {
          clickedOutside = false;
        }
      });

      if (clickedOutside) {
        setClickCount({ 0: 0, 1: 0, 2: 0, 3: 0 });
        setIconBackgroundColor({ 0: "", 1: "", 2: "", 3: "" });
      }
    };

    window.addEventListener('click', handleClickOutside);
    window.addEventListener('click', handleClickOutsideContextMenu);

    return () => {
      window.removeEventListener('click', handleClickOutside);
      window.removeEventListener('click', handleClickOutsideContextMenu);
    };
  }, []);

  useLayoutEffect(() => {
    function updateWindowDimensions() {
      const { innerWidth, innerHeight } = window;
      const windowWidth = 10;
      const windowHeight = 100;

      setDragConstraints({
        left: 0,
        right: Math.max(0, innerWidth - windowWidth),
        top: 0,
        bottom: Math.max(0, innerHeight - windowHeight)
      });
    }

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
      toggleMenu();
    }
  };

  const handleClickIcon = (index) => {
    setClickCount(prevCounts => {
      const newCount = prevCounts[index] + 1;

      setIconBackgroundColor(prevColors => ({
        ...prevColors,
        [index]: newCount === 1 ? "bg-orange-500 bg-opacity-25 w-full h-full" : ""
      }));

      if (newCount === 2) {
        if (index === 0) {
          // Handle My Computer
        } else if (index === 1) {
          setShowCv(true);
        } else if (index === 2) {
          setShowBlog(true);
        } else if (index === 3) {
          setShowCertificate(true);
        }
      }

      return {
        ...prevCounts,
        [index]: newCount === 2 ? 0 : newCount
      };
    });
  };

  const handleCloseCv = () => {
    setShowCv(false);
  };

  const handleCloseBlog = () => {
    setShowBlog(false);
  };

  const handleCloseCertificate = () => {
    setShowCertificate(false);
  };

  return (
    <div ref={windowRef} className="relative h-screen bg-gray-200 overflow-hidden overflow-x-hidden overflow-y-clip" style={{ backgroundImage: `url(${assets.bg0})`, backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%' }} onClick={clickwindow} onContextMenu={handleRightClick}>
      {iconPositions.map((position, index) => (
        <DraggableWindow key={index} dragConstraints={dragConstraints} windowPosition={position} className="w-20 h-24 cursor-grab">
          <div ref={el => (iconRefs.current[index] = el)} onClick={() => handleClickIcon(index)} className={iconBackgroundColor[index]}>
            {index === 0 && (
              <>
                <img src={assets.mycomputer} alt="mycomputer" onDragStart={handleDragStart} className='w-12 h-12 relative' />
                <span className='text-white text-xs ml-1 absolute'>My Computer</span>
              </>
            )}
            {index === 1 && (
              <>
                <img src={assets.RTF} alt="mycv" onDragStart={handleDragStart} className='w-12 h-12 relative' />
                <span className='text-white text-xs ml-1 absolute'>My CV</span>
              </>
            )}
            {index === 2 && (
              <>
                <img src={assets.Briefcase} alt="myblog" onDragStart={handleDragStart} className='w-12 h-12 relative' />
                <span className='text-white text-xs ml-1 absolute'>My Blog</span>
              </>
            )}
            {index === 3 && (
              <>
                <img src={assets.Certificate} alt="certificate" onDragStart={handleDragStart} className='w-12 h-12 relative' />
                <span className='text-white text-xs ml-1 absolute'>Certificate</span>
              </>
            )}
          </div>
        </DraggableWindow>
      ))}

      {showCv && (
        <DraggableWindow dragConstraints={dragConstraints} windowPosition={{ x: 200, y: 30 }} className="w-1/2 h-20 cursor-grab">
          <div>
            <assets.Cv CvClose={handleCloseCv} />
          </div>
        </DraggableWindow>
      )}

      {showBlog && (
        <DraggableWindow dragConstraints={dragConstraints} windowPosition={{ x: 200, y: 30 }} className="w-1/2 h-20 cursor-grab">
          <div>
            <assets.Blog BlogClose={handleCloseBlog} />
          </div>
        </DraggableWindow>
      )}

      {showCertificate && (
        <DraggableWindow dragConstraints={dragConstraints} windowPosition={{ x: 200, y: 30 }} className="w-1/2 h-20 cursor-grab">
          <div>
            <assets.Certificates CertificateonClose={handleCloseCertificate} />
          </div>
        </DraggableWindow>
      )}

      {showContextMenu && <ContextMenu top={contextMenuPosition.y} left={contextMenuPosition.x} />}
    </div>
  );
};

export default Window;
