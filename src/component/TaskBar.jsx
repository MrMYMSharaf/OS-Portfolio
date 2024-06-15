import React from 'react';
import assets from '../assets';
import Clock from '../component/clock';

const TaskBar = ({ toggleMenu, openedApps, closeApp }) => {
  return (
    <div className='absolute bottom-0 w-full bg-blue-700 flex justify-between pr-5'>
      <div className='flex items-center'>
        <button className='bg-lime-600 rounded text-white font-black p-1 flex items-center' onClick={toggleMenu}>
          <img src={assets.xplogo} alt="xplogo" className='w-6' />
          <span className='ml-1'>start</span>
        </button>
        <div className='flex items-center ml-2'>
          {openedApps.includes('Cv') && (
            <button className='ml-2' onClick={() => closeApp('Cv')}>
              <img src={assets.RTF} alt="cv" className='w-6' />
            </button>
          )}
          {openedApps.includes('Blog') && (
            <button className='ml-2' onClick={() => closeApp('Blog')}>
              <img src={assets.Briefcase} alt="blog" className='w-6' />
            </button>
          )}
          {openedApps.includes('Certificate') && (
            <button className='ml-2' onClick={() => closeApp('Certificate')}>
              <img src={assets.Certificate} alt="certificate" className='w-6' />
            </button>
          )}
        </div>
      </div>
      <div>
        <span className='text-white text-center'><Clock /></span>
      </div>
    </div>
  );
};

export default TaskBar;
