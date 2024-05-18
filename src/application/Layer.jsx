import React from 'react'

const Layer = ({icone,image,name,children,onClose }) => {
  const handleClose = () => {
    onClose(); // Call the onClose function passed from parent component
  };
  return (
    <div className='bg-blue-700 w-3/4 h-3/4'>
      <div className='flex justify-between items-center'>
        <div className='flex p-1'>
          <img src={icone} alt="calculator" className='w-8'/>
          <span className='text-white font-bold text-lg'>{name}</span>
        </div>
        <div className='flex items-end'>
          <img src={image} alt="Exit" className='w-10 p-2' onClick={handleClose} />
        </div>
      </div>
      <div className='bg-[#EEE8D8] w-full h-3/4 '>
       {children}
      </div>
      </div>
  )
}

export default Layer