import React from 'react';
import assets from '../../assets';

const MyComputer = ({ MyComputerClose }) => {
  return (
    <div>
      <assets.Layer icone={assets.mycomputer} image={assets.Exit} name={'My Computer'} onClose={MyComputerClose}>
        <span>Developing is ongoing</span>
      </assets.Layer>
    </div>
  );
};

export default MyComputer;
