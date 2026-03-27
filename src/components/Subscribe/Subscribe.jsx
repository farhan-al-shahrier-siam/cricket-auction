import React from 'react';

const Subscribe = () => {
    return (
        <div className='container mx-auto border border-black p-6 rounded-4xl my-6'>
            <div className=''>
                <div className='p-24 rounded-2xl bg-linear-to-bl from-amber-400/25 to-blue-400/25'>
                    <div className='text-center space-y-4'>
                        <h2 className='font-bold text-3xl'>Subscribe to our Newsletter</h2>
                        <p>Get the latest updates and news right in your inbox!</p>
                        <div>
                            <input className='p-3 border rounded-xl mr-4' type="email" placeholder='Enter your email' />
                            <button className='btn p-6 border bg-linear-to-r from-pink-400 to-amber-400'>Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;