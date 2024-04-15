import React, { useState } from 'react';
import assets from '../assets';
import emailjs from '@emailjs/browser';

const Email = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const serviceID = import.meta.env.VITE_SERVICE_ID;
        const templateID = import.meta.env.VITE_TEMPLATE_ID;
        const publickey = import.meta.env.VITE_PUBLIC_KEY;

        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: 'SHARAF',
            message: message,
        };

        emailjs.send(serviceID, templateID, templateParams, publickey)
            .then((response) => {
                console.log('Email sent successfully!', response);
                setName('');
                setEmail('');
                setMessage('');
                window.alert('Email sent successfully!');
            })
            .catch((error) => {
                console.error('Error sending email:', error);
            });
    }

    return (
        <>
            <assets.Layer icone={assets.iconeEmail} image={assets.Exit} name={'Email'}>
                <div className='mt-0 m-9 p-3'>
                    <form onSubmit={handleSubmit} className='email'>

                        <div className='flex flex-col'>
                        <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name : </span>
                            <input type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className='email-input'
                                required 
                                placeholder="John"
                            />
                        </div>
                        <div className='flex flex-col'>
                        <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email : </span>
        
                            <input type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className='email-input'
                                required 
                                placeholder="John@mail.com"
                            />
                        </div>
                        <div className='flex flex-col'>
                          <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</span>
                        <textarea cols="30" rows="10" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        />

                        </div>
                        
                         <div className='flex flex-col items-end justify-around mt-3'>

                        <button type="submit" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2
                        ">Send Emai</button>
                         </div>
                    </form>
                </div>
            </assets.Layer>
        </>
    );
}

export default Email;
