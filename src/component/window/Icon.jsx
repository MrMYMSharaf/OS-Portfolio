import React from 'react';

const Icon = ({ iconRef, index, handleClickIcon, iconBackgroundColor, handleDragStart, assets }) => {
  const icons = [
    { src: assets.mycomputer, label: 'My Computer' },
    { src: assets.RTF, label: 'My CV' },
    { src: assets.Briefcase, label: 'My Blog' },
    { src: assets.Certificate, label: 'Certificate' }
  ];

  const { src, label } = icons[index];

  return (
    <div ref={iconRef} onClick={() => handleClickIcon(index)} className={iconBackgroundColor}>
      <img src={src} alt={label.toLowerCase().replace(' ', '')} onDragStart={handleDragStart} className='w-12 h-12 relative' />
      <span className='text-white text-xs ml-1 absolute'>{label}</span>
    </div>
  );
};

export default Icon;
