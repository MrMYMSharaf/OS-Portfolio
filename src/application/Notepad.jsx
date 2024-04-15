import React, { useState } from 'react';
import assets from '../assets';

const Notepad = () => {
    const [text, setText] = useState('');

    return (
        <>
            <assets.Layer icone={assets.IconNotepad} image={assets.Exit} name={'Notepad'}>
                <div>
                    <span className='ml-2'>File</span>
                    <span className='ml-2'>Print</span>
                    <span className='ml-2'>Download</span>
                </div>
                <div className="textarea-container">
                    <textarea
                        cols="30"
                        rows="10"
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 scrollbar"
                        placeholder="Write your thoughts here..."
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>
            </assets.Layer>
        </>
    );
}

export default Notepad;
