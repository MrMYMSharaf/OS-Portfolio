import React from 'react';
import assets from '../assets';
import html2canvas from 'html2canvas';

const ContextMenu = ({ top, left, changeBackground }) => {
    const handleRefreshClick = () => {
        window.location.reload();
    };

    const handleBackgroundChange = (bg) => {
        changeBackground(bg);
    };

    const handleCaptureScreen = () => {
        html2canvas(document.body).then(canvas => {
            const link = document.createElement('a');
            link.href = canvas.toDataURL('image/png');
            link.download = 'screenshot.png';
            link.click();
        });
    };

    return (
        <div className="w-44 bg-slate-100 flex flex-col shadow-md absolute" style={{ top: top, left: left }}>
            <div className="relative group">
                <span className="hover:bg-blue-500 hover:shadow-md p-4 cursor-pointer block w-full">Sort by</span>
                <div className="absolute left-full top-0 hidden group-hover:block bg-white shadow-md w-40">
                    <div className="flex flex-col">
                        <span className=" hover:bg-blue-500 hover:shadow-md p-4 cursor-pointer block w-full">Name</span>
                        <span className="hover:bg-blue-500 hover:shadow-md p-4 cursor-pointer block w-full">Size</span>
                        <span className="hover:bg-blue-500 hover:shadow-md p-4 cursor-pointer block w-full">Item type</span>
                        <span className="hover:bg-blue-500 hover:shadow-md p-4 cursor-pointer block w-full">Date modified</span>
                    </div>
                </div>
            </div>
            <span className="hover:bg-blue-500 hover:shadow-md p-4 cursor-pointer block w-full" onClick={handleRefreshClick}>Refresh</span>
            <div className="relative group">
                <span className="hover:bg-blue-500 hover:shadow-md p-4 cursor-pointer block w-full">Background</span>
                <div className="absolute left-full top-0 hidden group-hover:block bg-white shadow-md w-40">
                    <div className="flex flex-col">
                        <span className="hover:bg-blue-500 hover:shadow-md p-4 cursor-pointer block w-full" onClick={() => handleBackgroundChange(assets.bg0)}>Option 1</span>
                        <span className="hover:bg-blue-500 hover:shadow-md p-4 cursor-pointer block w-full" onClick={() => handleBackgroundChange(assets.bg2)}>Option 2</span>
                        <span className="hover:bg-blue-500 hover:shadow-md p-4 cursor-pointer block w-full" onClick={() => handleBackgroundChange(assets.bg3)}>Option 3</span>
                    </div>
                </div>
            </div>
            <span className="hover:bg-blue-500 hover:shadow-md p-4 cursor-pointer block w-full" onClick={handleCaptureScreen}>Capture Screen</span>
            <span className="hover:bg-blue-500 hover:shadow-md p-4 cursor-pointer block w-full">Properties</span>
            <div className="hover:bg-white p-4 h-0 cursor-pointer" />
        </div>
    );
};

export default ContextMenu;
