import InternetExplorerImage from '../assets/icon/Internet Explorer 6.png';
import OutlookImage from '../assets/icon/Outlook Express.png';
import Paint from '../assets/icon/Paint.png';
import WMP9 from '../assets/icon/Windows Media Player 9.png';
import Calculator from '../assets/icon/Calculator.png';
import Notepad from '../assets/icon/Notepad.png';

import Documents from '../assets/icon/My Documents.png';
import Pictures from '../assets/icon/My Pictures.png';
import Music from '../assets/icon/My Music.png';
import Computer from '../assets/icon/My Computer.png';
import Game from '../assets/icon/Game.png';
import Videos from '../assets/icon/My Videos.png';


const MainMenuData = [
  { name: "Internet", SubName: "Internet Explorer", image: InternetExplorerImage },
  { name: "Email", SubName: "", image: OutlookImage },
  { name: "Paint", SubName: "", image: Paint },
  { name: "Window Media Player", SubName: "", image:WMP9 },
  { name: "Calculator", SubName: "", image:Calculator },
  { name: "Notepad", SubName: "", image:Notepad },
];


const MainMenuData1 = [
  { name: "My Documents", image: Documents },
  { name: "My Pictures", image: Pictures },
  { name: "My Music", image: Music },
  { name: "My Videos", image: Videos },
  { name: "My Computer", image: Computer},
  { name: "Games", image: Game },
  
];

export { MainMenuData, MainMenuData1 };
