import React, { useEffect, useState, useLayoutEffect, useRef } from 'react';
import DraggableWindow from './DraggableWindow';
import Icon from './Icon';
import ContextMenu from '../../application/ContextMenu';
import assets from '../../assets';

const Desktop = ({ menuVisible, toggleMenu, openApp, closeApp, appVisibility }) => {
  const [dragConstraints, setDragConstraints] = useState({ left: 0, right: 0, top: 0, bottom: 0 });
  const [windowPosition, setWindowPosition] = useState({ x: 0, y: 0 });
  const [showContextMenu, setShowContextMenu] = useState(false);
  const [contextMenuPosition, setContextMenuPosition] = useState({ x: 0, y: 0 });
  const [clickCount, setClickCount] = useState({ 0: 0, 1: 0, 2: 0, 3: 0 });
  const [showCertificate, setShowCertificate] = useState(false);
  const [showCv, setShowCv] = useState(false);
  const [showBlog, setShowBlog] = useState(false);
  const [showMyComputer, setShowMyComputer] = useState(false);
  const [iconBackgroundColor, setIconBackgroundColor] = useState({
    0: '',
    1: '',
    2: '',
    3: ''
  });
  const [background, setBackground] = useState(assets.bg0);

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

      iconRefs.current.forEach((icon) => {
        if (icon && icon.contains(event.target)) {
          clickedOutside = false;
        }
      });

      if (clickedOutside) {
        setClickCount({ 0: 0, 1: 0, 2: 0, 3: 0 });
        setIconBackgroundColor({ 0: '', 1: '', 2: '', 3: '' });
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
    setClickCount((prevCounts) => {
      const newCount = prevCounts[index] + 1;

      setIconBackgroundColor((prevColors) => ({
        ...prevColors,
        [index]: newCount === 1 ? 'bg-orange-500 bg-opacity-25 w-full h-full' : ''
      }));

      if (newCount === 2) {
        if (index === 0) {
          setShowMyComputer(true);
          openApp('MyComputer');
        } else if (index === 1) {
          setShowCv(true);
          openApp('Cv');
        } else if (index === 2) {
          setShowBlog(true);
          openApp('Blog');
        } else if (index === 3) {
          setShowCertificate(true);
          openApp('Certificate');
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
    closeApp('Cv');
  };

  const handleCloseBlog = () => {
    setShowBlog(false);
    closeApp('Blog');
  };

  const handleCloseCertificate = () => {
    setShowCertificate(false);
    closeApp('Certificate');
  };

  const handleCloseMyComputer = () => {
    setShowMyComputer(false);
    closeApp('MyComputer');
  };

  const changeBackground = (bg) => {
    setBackground(bg);
  };

  return (
    <div
      ref={windowRef}
      className='relative h-screen bg-gray-200 overflow-hidden overflow-x-hidden overflow-y-clip'
      style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%' }}
      onClick={clickwindow}
      onContextMenu={handleRightClick}
    >
      {iconPositions.map((position, index) => (
        <DraggableWindow key={index} dragConstraints={dragConstraints} windowPosition={position} className='w-20 h-24 cursor-grab'>
          <Icon
            iconRef={(el) => (iconRefs.current[index] = el)}
            index={index}
            handleClickIcon={handleClickIcon}
            iconBackgroundColor={iconBackgroundColor[index]}
            handleDragStart={handleDragStart}
            assets={assets}
          />
        </DraggableWindow>
      ))}

      {showMyComputer && appVisibility['MyComputer'] && (
        <DraggableWindow dragConstraints={dragConstraints} windowPosition={{ x: 200, y: 30 }} className='w-1/2 h-20 cursor-grab'>
          <assets.Mycomputer MyComputerClose={handleCloseMyComputer} />
        </DraggableWindow>
      )}

      {showCv && appVisibility['Cv'] && (
        <DraggableWindow dragConstraints={dragConstraints} windowPosition={{ x: 200, y: 30 }} className='w-1/2 h-20 cursor-grab'>
          {/* Replace assets.Cv with your actual component */}
          <assets.Cv CvClose={handleCloseCv} />
        </DraggableWindow>
      )}

      {showBlog && appVisibility['Blog'] && (
        <DraggableWindow dragConstraints={dragConstraints} windowPosition={{ x: 200, y: 30 }} className='w-1/2 h-20 cursor-grab'>
          {/* Replace assets.Blog with your actual component */}
          <assets.Blog BlogClose={handleCloseBlog} />
        </DraggableWindow>
      )}

      {showCertificate && appVisibility['Certificate'] && (
        <DraggableWindow dragConstraints={dragConstraints} windowPosition={{ x: 200, y: 30 }} className='w-1/2 h-20 cursor-grab'>
          {/* Replace assets.Certificates with your actual component */}
          <assets.Certificates CertificateonClose={handleCloseCertificate} />
        </DraggableWindow>
      )}

      {showContextMenu && <ContextMenu top={contextMenuPosition.y} left={contextMenuPosition.x} changeBackground={changeBackground} />}
    </div>
  );
};

export default Desktop;
