"use client"
import React, { useState } from 'react';

export default function Subscribe() {

    const [email, setEmail] = useState('');

    const handleChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      // try {
      //   const response = await fetch('https://formsubmit.co/nfo@pmiai.io', {
      //     method: 'POST',
      //     headers: {
      //       'Content-Type': 'application/x-www-form-urlencoded',
      //     },
      //     body: new URLSearchParams({ email }).toString(),
      //   });
  
      //   if (response.ok) {
      //     console.log('Email submitted successfully');
      //   } else {
      //     console.log('Submission failed');
      //   }
      // } catch (error) {
      //   console.error('There was an error!', error);
      // }
    };
  
    
    return (
        <>
            <div id='contacts' className="bg-subscribe w-[95%] md:w-[80%] items-center mt-10 p-5 text-center">
                <div style={{ marginLeft: 'auto', marginRight: 'auto' }} className="w-[95%] md:w-[70%]">
                    <h1 style={{lineHeight:'normal', marginBottom:'20px'}} className="text-[19px]  md:text-5xl lg:text-5xl text-[white] font-bold mt-5 md:text-[40px]">
                        subscribe to our newsletter today!
                    </h1>
                    <form style={{ marginLeft: 'auto', marginRight: 'auto' }} className="w-[80%] mb-5">
                        <label
                            htmlFor="subscribe"
                            className="mb-2 text-sm font-medium text-gray-900 sr-only "
                        >
                            subscribe
                        </label>
                        <div className="relative">
                            <div className="absolute hidden md:block md:mt-4 inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <img width="20" height="20" src="https://img.icons8.com/ios/50/mail.png" alt="mail"/>
                            </div>
                         
                            <input
                                type="email"
                                name="email"
                                value={email}
                                onChange={handleChange}
                                required
                                id="search"
                                className="block w-full p-4 pl-10 text-sm text-gray-900 border  rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 "
                                placeholder="Enter Your Email"
                            />
                            <button
                                type="submit"
                                onSubmit={handleSubmit} onClick={handleSubmit}
                                className="button hidden md:block text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 "
                            >
                                Subscribe
                            </button>
                            <button
                                type="submit"
                                onSubmit={handleSubmit} onClick={handleSubmit}
                                className="button block md:hidden text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 "
                            >
                                &gt;
                            </button>
                      
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}