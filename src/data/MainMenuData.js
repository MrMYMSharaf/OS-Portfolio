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
  { name: "Internet", SubName: "Internet Explorer", image: InternetExplorerImage , on_clicked: () => handleItemClick("Internet") },
  { name: "Email", SubName: "", image: OutlookImage , on_clicked: () => handleItemClick("Email") },
  { name: "Paint", SubName: "", image: Paint , on_clicked: () => handleItemClick("Paint") },
  { name: "Window Media Player", SubName: "", image:WMP9 , on_clicked: () => handleItemClick("WindowMP") },
  { name: "Calculator", SubName: "", image:Calculator , on_clicked: () => handleItemClick("Calculator") },
  { name: "Notepad", SubName: "", image:Notepad , on_clicked: () => handleItemClick("Notepad") },
];


const MainMenuData1 = [
  { name: "My Documents", image: Documents , on_clicked:"Documents" },
  { name: "My Pictures", image: Pictures , on_clicked:"Pictures" },
  { name: "My Music", image: Music , on_clicked:"Music" },
  { name: "My Videos", image: Videos  , on_clicked:"Videos"},
  { name: "My Computer", image: Computer , on_clicked:"Computer"},
  { name: "Games", image: Game , on_clicked:"Games" },
  
];

export { MainMenuData, MainMenuData1 };
