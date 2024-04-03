import assets from '../assets';
import Clock from '../component/clock';

const TaskBar = ({ toggleMenu }) => {
  return (
    <div className='absolute bottom-0 w-screen bg-blue-700 flex justify-between pr-5'>
      <div>
        <button className='bg-lime-600 rounded text-white font-black p-1 flex' onClick={toggleMenu}>
          <img src={assets.xplogo} alt="xplogo" className='w-6 justify-center'/>
          <span className='ml-1'>start</span>
        </button>
      </div>
      <div>
        <span className='text-white text-center'><Clock/></span>
      </div>
    </div>
  );
};

export default TaskBar;
