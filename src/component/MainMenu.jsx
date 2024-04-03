
import assets from "../assets"
import {MainMenuData,MainMenuData1} from "../data/MainMenuData"
const MainMenu = () => {
  return (
    <div className="absolute  bottom-8">
     <div className="bg-blue-800 md:w-96 w-80   shadow-lg ">
      <div className="flex  items-center p-4">
      <img src={assets.bg4} alt="bg4" className=" border-x-white border-4 w-16" />
       <span className="font-bold text-white justify-center items-center p-2">SHARAF</span>
      </div>
      {/* the main two dive */}
      <div className="flex">
      <div className="bg-slate-100 w-48 h-64">
        <ul>
              {MainMenuData.map((item, index) => (
                <li key={index} className="flex hover:bg-slate-300 space-x-1 mt-2">
                  <img src={item.image} alt={item.name} className="w-7"/>
                  <div className="mt-2 justify-center items-center">
                  <span className="flex font-medium text-xs">{item.name}</span>
                  <span className="font-thin italic">{item.SubName}</span>
                  </div>
                </li>
              ))}
            </ul>
      </div>
      <div className="bg-blue-200 w-48 h-64">
        
        <ul className="mt-5 ml-2">
              {MainMenuData1.map((item, index) => (
                <li key={index} className="flex hover:bg-slate-300 space-x-1 mt-2">
                  <img src={item.image} alt={item.name} className="w-7"/>
                  <div className="mt-2 justify-center items-center">
                  <span className="flex font-medium text-xs">{item.name}</span>
                
                  </div>
                </li>
              ))}
            </ul>
      </div>
      </div>
      {/* powerbutton */}
      <div className="flex justify-end items-center text-white p-2 space-x-4">
      <button className="flex  hover:text-teal-300"><img src={assets.logout} alt="bg4" className="w-7" /><span className="ml-1">Log off</span> </button>
      <button className="flex  hover:text-teal-300"><img src={assets.power} alt="bg4" className="w-7" /><span className="ml-1">Turn off Computer</span></button>
      </div>
    </div>
    </div>
  )
}

export default MainMenu

