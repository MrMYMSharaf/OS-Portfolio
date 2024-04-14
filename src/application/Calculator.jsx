import React, { useState } from 'react';
import calculatorimg from '../assets/icon/Calculator.png';
import Exit from '../assets/icon/Exit.png';

const Calculator = () => {
  const [value, setValue] = useState(''); 

  const handleButtonClick = (buttonValue) => {
    if (buttonValue === 'C' || buttonValue === 'CE') {
      setValue('');
    } else if (buttonValue === 'Backspace') {
      setValue(value.slice(0, -1));
    } else if (buttonValue === '=') {
      try {
        setValue(eval(value).toString());
      } catch (error) {
        setValue('Error');
      }
    } else if (buttonValue === '√') {
      // Check if the current value is a valid number
      const num = parseFloat(value);
      if (!isNaN(num)) {
        // Compute the square root of the number
        setValue(Math.sqrt(num).toString());
      } else {
        // If the current value is not a valid number, set an error message
        setValue('Error');
      }
    } else if (buttonValue === '%') {
      // Check if the current value is a valid number
      const num = parseFloat(value);
      if (!isNaN(num)) {
        // Calculate the percentage (divide the current value by 100)
        setValue((num / 100).toString());
      } else {
        // If the current value is not a valid number, set an error message
        setValue('Error');
      }
    } else if (buttonValue === '=') {
      try {
        const result = eval(value);
        setValue(result.toString());
      } catch (error) {
        setValue('Error');
      }
    } else if (buttonValue === '+/-') {
      // Check if the current value is a valid number
      const num = parseFloat(value);
      if (!isNaN(num)) {
        // Toggle the sign of the number
        setValue((-num).toString());
      } else {
        // If the current value is not a valid number, set an error message
        setValue('Error');
      }
    } else if (buttonValue === '1/x') {
      // Check if the current value is a valid number
      const num = parseFloat(value);
      if (!isNaN(num)) {
        // Calculate the reciprocal (1/x) of the number
        if (num !== 0) {
          setValue((1 / num).toString());
        } else {
          // If the number is 0, set an error message
          setValue('Error: Division by zero');
        }
      } else {
        // If the current value is not a valid number, set an error message
        setValue('Error');
      }
    
    } else {
      setValue(value + buttonValue);
    }
  };

  return (
    <div className='bg-blue-700 w-[20.27rem] h-[22.60rem]'>
      <div className='flex justify-between items-center'>
        <div className='flex p-1'>
          <img src={calculatorimg} alt="calculator" className='w-8'/>
          <span className='text-white font-bold text-lg'>Calculator</span>
        </div>
        <div className='flex items-end'>
          <img src={Exit} alt="Exit" className='w-10 p-2' />
        </div>
      </div>
      <div className='bg-[#EEE8D8] w-80 ml-[2px]'>
        <div className=''>
          <span className='p-4'>Edit</span>
          <span className='p-4'>View</span>
          <span className='p-4'>Help</span>
        </div>
        <div className=''>
          <div className='m-3'>
            <input className='w-full text-right text-black' type="text" placeholder='0.' value={value} readOnly />
          </div>
          <div className='flex justify-between'>
            <button className='cal-btn-secondary' type="button" onClick={() => handleButtonClick('Backspace')}>Backspace</button>
            <button className='cal-btn-secondary' type="button" onClick={() => handleButtonClick('CE')}>CE</button>
            <button className='cal-btn-secondary' type="button" onClick={() => handleButtonClick('C')}>C</button>
          </div>
          <div className='flex justify-between'>
            <button className='cal-btn1-secondary' type="button" onClick={() => handleButtonClick('7')}>7</button>
            <button className='cal-btn1-secondary' type="button" onClick={() => handleButtonClick('8')}>8</button>
            <button className='cal-btn1-secondary' type="button" onClick={() => handleButtonClick('9')}>9</button>
            <button className='cal-btn1-secondary' type="button" style={{ color: '#DC2626' }} onClick={() => handleButtonClick('/')}>/</button>
            <button className='cal-btn1-secondary' type="button" onClick={() => handleButtonClick('√')}>√</button>
          </div>
          <div className='flex justify-between'>
            <button className='cal-btn1-secondary' type="button" onClick={() => handleButtonClick('4')}>4</button>
            <button className='cal-btn1-secondary' type="button" onClick={() => handleButtonClick('5')}>5</button>
            <button className='cal-btn1-secondary' type="button" onClick={() => handleButtonClick('6')}>6</button>
            <button className='cal-btn1-secondary' type="button" style={{ color: '#DC2626' }} onClick={() => handleButtonClick('*')}>*</button>
            <button className='cal-btn1-secondary' type="button" onClick={() => handleButtonClick('%')}>%</button>
          </div>
          <div className='flex justify-between'>
            <button className='cal-btn1-secondary' type="button" onClick={() => handleButtonClick('1')}>1</button>
            <button className='cal-btn1-secondary' type="button" onClick={() => handleButtonClick('2')}>2</button>
            <button className='cal-btn1-secondary' type="button" onClick={() => handleButtonClick('3')}>3</button>
            <button className='cal-btn1-secondary' type="button"style={{ color: '#DC2626' }}onClick={() => handleButtonClick('-')}>-</button>
            <button className='cal-btn1-secondary' type="button" onClick={() => handleButtonClick('1/x')}>1/x</button>
          </div>
          <div className='flex justify-between'>
            <button className='cal-btn1-secondary' type="button" onClick={() => handleButtonClick('0')}>0</button>
            <button className='cal-btn1-secondary' type="button" onClick={() => handleButtonClick('+/-')}>+/-</button>
            <button className='cal-btn1-secondary' type="button" onClick={() => handleButtonClick('.')}>.</button>
            <button className='cal-btn1-secondary' type="button"style={{ color: '#DC2626' }}onClick={() => handleButtonClick('+')}>+</button>
            <button className='cal-btn1-secondary' type="button"style={{ color: '#DC2626' }} onClick={() => handleButtonClick('=')}>=</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
