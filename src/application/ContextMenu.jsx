import React from 'react';

const ContextMenu = ({ top, left }) => {
    const handleRefreshClick = () => {
        window.location.reload();
    };

    return (
        <div className={`w-40 bg-applicationBg flex flex-col absolute`} style={{ top: top, left: left }}>
            <div className='relative group'>
                <span className='hover:bg-white p-4 cursor-pointer block w-full'>Sort by</span>
                <div className='absolute left-full top-0 hidden group-hover:block bg-white shadow-md w-40'>
                    {/* Submenu options */}
                    <div className='flex flex-col'>
                        <span className='p-2'>Name</span>
                        <span className='p-2'>Size</span>
                        <span className='p-2'>Item type</span>
                        <span className='p-2'>Date modified</span>
                    </div>
                </div>
            </div>

            <span className='hover:bg-white p-4 cursor-pointer block w-full' onClick={handleRefreshClick}>Refresh</span>
            <div className='relative group'>
                <span className='hover:bg-white p-4 cursor-pointer block w-full'>Background</span>
                <div className='absolute left-full top-0 hidden group-hover:block bg-white shadow-md w-40'>
                    {/* Submenu options */}
                    <div className='flex flex-col'>
                        <span className='p-2'>Option 1</span>
                        <span className='p-2'>Option 2</span>
                        <span className='p-2'>Option 3</span>
                    </div>
                </div>
            </div>
            <span className='hover:bg-white p-4 cursor-pointer block w-full'>Capture Screen</span>
            <span className='hover:bg-white p-4 cursor-pointer block w-full'>Properties</span>
            {/* Empty div for adjusting hover background size */}
            <div className='hover:bg-white p-4 h-0 cursor-pointer' />
        </div>
    );
};

export default ContextMenu;
