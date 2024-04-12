import React from 'react';
import calculatorimg from '../assets/icon/Calculator.png';
import Exit from '../assets/icon/Exit.png';
import { FiX } from "react-icons/fi";

const Calculator = () => {
  const Exitf = ()=>{
    console.log('it wored')
  }
  return (
    <div className='bg-blue-700 h-1/4 w-1/2'>
      <div className='flex justify-between'>
        <div className='flex p-1'>
          <img src={calculatorimg} alt="calculator" className='w-7'/>
          <span className='text-white'>Calculator</span>
        </div>
        <div className='flex items-end'>
          <img src={Exit} alt="Exit" onClick={Exitf} className='w-10 h-10' />
        </div>
      </div>
      <div className='bg-neutral-500'>
        <div >
          <span className='p-4'>Edit</span>
          <span className='p-4'>View</span>
          <span className='p-4'>Help</span>
        </div>
        <div className='flex justify-between'>
          <button  className='p-2 border-solid' type="button"></button>
          <button className='p-2' type="button">Backspace</button>
          <button className='p-2' type="button">CE</button>
          <button className='p-2' type="button">C</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
