import React from 'react';
import assets from '../assets';
import Clock from '../component/clock';

const TaskBar = ({ toggleMenu, openedApps, toggleAppVisibility }) => {
  const appAssets = {
    MyComputer: assets.mycomputer,
    Cv: assets.RTF,
    Blog: assets.Briefcase,
    Certificate: assets.Certificate,
  };
  const appLabels = {
    MyComputer: 'My Computer',
    Cv: 'Cv',
    Blog: 'Blog',
    Certificate: 'Certificate',
  };

  return (
    <div className='absolute bottom-0 w-full bg-blue-700 flex justify-between items-center pr-0'>
      <div className='flex items-center'>
        <button className='bg-lime-600 rounded text-white font-black p-1 flex items-center' onClick={toggleMenu}>
          <img src={assets.xplogo} alt="xplogo" className='w-6' />
          <span className='ml-1'>start</span>
        </button>
        <div className='flex items-center ml-2 overflow-x-auto scrollbar-hide max-w-full'>
          {openedApps.map((app, index) => (
            <button
              key={index}
              className='ml-2 text-white font-black p-1 flex bg-slate-500 w-36 items-center'
              onClick={() => toggleAppVisibility(app)}
            >
              <img src={appAssets[app]} alt={appLabels[app]} className='w-6 h-6' />
              <span className='ml-1'>{appLabels[app]}</span>
            </button>
          ))}
        </div>
      </div>
      <div className='flex-shrink-0 pr-2'>
        <span className='text-white text-center'><Clock /></span>
      </div>
    </div>
  );
};

export default TaskBar;
