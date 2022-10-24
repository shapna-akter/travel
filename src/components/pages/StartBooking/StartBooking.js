import React from 'react';
import { Link } from 'react-router-dom';

const StartBooking = () => {
    return (
        <div className='flex flex-col justify-center mx-auto mt-12 max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
            <div className='mb-8'>
                <h1 className='my-3 text-4xl font-bold'>Let's Booking</h1>
            </div>
            <form
                noValidate=''
                action=''
                className='space-y-6 ng-untouched ng-pristine ng-valid'
            >
                <div className='space-y-4'>
                    <div>
                        <div className='flex justify-between'>
                            <label className='text-sm mb-2'>
                                Origin
                            </label>
                        </div>
                        <input
                            type='text'
                            className='w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-200 focus:border-gray-900 text-gray-900'
                        />
                    </div>
                    <div>
                        <div className='flex justify-between'>
                            <label className='text-sm mb-2'>
                                Destination
                            </label>
                        </div>
                        <input
                            type='text'
                            className='w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-200 focus:border-gray-900 text-gray-900'
                        />
                    </div>
                </div>
                <div className='flex justify-between gap-2'>
                    <div>
                        <div className='flex justify-between'>
                            <label className='text-sm mb-2'>
                                From
                            </label>
                        </div>
                        <input
                            type='date'
                            name='date'
                            className='w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-200 focus:border-gray-900 text-gray-900'
                        />
                    </div>
                    <div>
                        <div className='flex justify-between'>
                            <label className='text-sm mb-2'>
                                To
                            </label>
                        </div>
                        <input
                            type='date'
                            name='date'
                            className='w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-200 focus:border-gray-900 text-gray-900'
                        />
                    </div>
                </div>
                <div>
                    <Link to='/destination'>
                        <button
                            type='submit'
                            className='w-full px-8 py-3 font-semibold rounded-md bg-orange-500 hover:bg-gray-700 hover:text-white text-gray-100'
                        >
                            Start Booking
                        </button>
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default StartBooking;