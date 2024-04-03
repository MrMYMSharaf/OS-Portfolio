import React, { useEffect, useState } from 'react';

const Clock = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      const dateObject = new Date();
      const hour = dateObject.getHours().toString().padStart(2, '0');;
      const minute = dateObject.getMinutes().toString().padStart(2, '0');;
      const second = dateObject.getSeconds().toString().padStart(2, '0');
      const currentTime = hour + ' : ' + minute + ' : ' + second;
      setTime(currentTime);
    }, 1000);

    // Clean up the interval
    return () => clearInterval(intervalId);
  }, []);

  return <div>{time}</div>;
};

export default Clock;
