// assets.js

// Importing the TaskBar component
import TaskBar from './component/TaskBar';
import Window from './component/Window';
import MainMenu from './component/MainMenu';

// Importing the Application jsx
import Calculator from './application/Calculator';
import Email from './application/Email';
import Notepad from './application/Notepad';
import ContextMenu from './application/ContextMenu';

import Layer from './application/Layer';

//Importing Desktop application
import Certificates from './application/windowAplication/Certificate';
import Cv from './application/windowAplication/Cv';
import Blog from './application/windowAplication/Blog';

// Importing background images
import bg0 from './assets/bg-img/wal0.webp';
import bg2 from './assets/bg-img/wal2.jpg';
import bg3 from './assets/bg-img/wal3.jpg';
import bg4 from './assets/bg-img/wal4.jpg';
import matrix3d from './assets/bg-video/Matrix3D.gif';
import dGit from './assets/bg-video/3dGit.gif';


// Importing Certification images
import Cgoogle from './assets/cretification-img/google.png';
import Cibm from './assets/cretification-img/ibm.png';
import Cudemy from './assets/cretification-img/udemy.png';
import CLinkdin from './assets/cretification-img/Linkedin.jpg';

//// Importing Icone
import xplogo from './assets/xp-logo/logo.png';
import mycomputer from './assets/icon/mycomputer_icon.png';
import power from './assets/icon/Power.png';
import logout from './assets/icon/Logout.png';
import Certificate from './assets/icon/Certificate.png';
import RTF from './assets/icon/RTF.png';
import Briefcase from './assets/icon/Briefcase.png';

import iconeEmail from './assets/icon/Outlook Express.png';
import Exit from './assets/icon/Exit.png';
import IconNotepad from './assets/icon/Notepad.png'


// Exporting all assets
export default {
  Window,
  TaskBar,Layer,ContextMenu,
  MainMenu,Calculator,Email,Exit,Notepad,
  Certificates,Cv,Blog,
  iconeEmail,IconNotepad, // Export Calculator component
  bg0,
  bg2,
  bg3,
  bg4,
  matrix3d,
  dGit, // Ensure this is exported
  xplogo,
  mycomputer,
  power,logout,Certificate,RTF,Briefcase,
  Cgoogle,Cibm,Cudemy,CLinkdin
};
