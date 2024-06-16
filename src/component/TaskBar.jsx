import React from 'react';
import assets from '../assets';
import Clock from '../component/clock';

const TaskBar = ({ toggleMenu, openedApps, toggleAppVisibility }) => {
  return (
    <div className='absolute bottom-0 w-full bg-blue-700 flex justify-between pr-5'>
      <div className='flex items-center'>
        <button className='bg-lime-600 rounded text-white font-black p-1 flex items-center' onClick={toggleMenu}>
          <img src={assets.xplogo} alt="xplogo" className='w-6' />
          <span className='ml-1'>start</span>
        </button>
        <div className='flex items-center ml-2'>
          {openedApps.includes('MyComputer') && (
            <button className='ml-2 text-white font-black p-1 flex bg-slate-500 w-36 items-center' onClick={() => toggleAppVisibility('MyComputer')}>
              <img src={assets.mycomputer} alt="mycomputer" className='w-6 h-6' />
              <span className='ml-1'>My Computer</span>
            </button>
          )}
          {openedApps.includes('Cv') && (
            <button className='ml-2 text-white font-black p-1 flex bg-slate-500 w-36 items-center' onClick={() => toggleAppVisibility('Cv')}>
              <img src={assets.RTF} alt="cv" className='w-6 h-6' />
              <span className='ml-1'>Cv</span>
            </button>
          )}
          {openedApps.includes('Blog') && (
            <button className='ml-2 text-white font-black p-1 flex bg-slate-500 w-36 items-center' onClick={() => toggleAppVisibility('Blog')}>
              <img src={assets.Briefcase} alt="blog" className='w-6 h-6' />
              <span className='ml-1'>Blog</span>
            </button>
          )}
          {openedApps.includes('Certificate') && (
            <button className='ml-2 text-white font-black p-1 flex bg-slate-500 w-36 items-center' onClick={() => toggleAppVisibility('Certificate')}>
              <img src={assets.Certificate} alt="certificate" className='w-6 h-6' />
              <span className='ml-1'>Certificate</span>
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
