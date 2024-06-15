import React, { useState, useEffect } from 'react';
import assets from '../../assets';


const Cv = ({ CvClose }) => {
  
  return (
    <div>
      <assets.Layer icon={assets.Certificate} image={assets.Exit} name={'CV'} onClose={CvClose}>
        <span>hi</span>
      </assets.Layer>
    </div>
  );
};

export default Cv;
