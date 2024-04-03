import React from 'react';
import calculatorimg from '../assets/icon/Calculator.png';
import Exit from '../assets/icon/Exit.png';
import { FiX } from "react-icons/fi";

const Calculator = () => {
  return (
    <div className='bg-blue-700 h-1/4 w-1/2'>
      <div className='flex justify-between'>
        <div className='flex p-1'>
          <img src={calculatorimg} alt="calculator" className='w-7'/>
          <span className='text-white'>Calculator</span>
        </div>
        <div className='flex items-end'>
          <img src={Exit} alt="Exit" className='w-10 h-10' />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
