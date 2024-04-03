// assets.js

// Importing the TaskBar component
import TaskBar from './component/TaskBar';
import Window from './component/Window';
import MainMenu from './component/MainMenu';

// Importing the Application jsx
import Calculator from './application/Calculator';


// Importing background images
import bg0 from './assets/bg-img/wal0.webp';
import bg2 from './assets/bg-img/wal2.jpg';
import bg3 from './assets/bg-img/wal3.jpg';
import bg4 from './assets/bg-img/wal4.jpg';

//// Importing Icone
import xplogo from './assets/xp-logo/logo.png';
import mycomputer from './assets/icon/mycomputer_icon.png';
import power from './assets/icon/Power.png';
import logout from './assets/icon/Logout.png';
import Certificate from './assets/icon/Certificate.png';
import RTF from './assets/icon/RTF.png';
import Briefcase from './assets/icon/Briefcase.png'

// Exporting all assets
export default {
  Window,
  TaskBar,
  MainMenu,Calculator, // Export Calculator component
  bg0,
  bg2,
  bg3,
  bg4,
  xplogo,
  mycomputer,
  power,logout,Certificate,RTF,Briefcase
};
