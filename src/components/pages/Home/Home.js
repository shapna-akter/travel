import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import bg from '../../../image/hotel.jpg'
import Room from '../Room/Room';

const Home = () => {
    const rooms = useLoaderData();
    console.log(rooms);
    return (
        <div className='md:flex md:flex-col w-full h-screen bg-center bg-no-repeat text-center'
            style={{
                backgroundImage: `url(${bg})`
            }}>
            <div>
                <h2 className='text-5xl text-white font-bold'>Welcome to Hotel Europea</h2>
                <p className='text-2xl text-white font-medium'><small>Hotel and Resorts</small></p>
                <div className='flex flex-wrap justify-center'>
                            <Link to='/login'>
                            <button
                                type='button'
                                className='px-8 py-3 m-2 text-lg font-semibold rounded bg-gray-800 hover:bg-gray-700 text-gray-50'
                            >
                                Login
                            </button>
                            </Link>

                            <Link to='/signup'>
                            <button
                                type='button'
                                className='px-8 py-3 m-2 text-lg font-semibold rounded bg-gray-800 hover:bg-gray-700 text-gray-50'
                            >
                                Register
                            </button>
                            </Link>
                        </div>
            </div>
            <div className='grid md:grid-cols-3 gap-4 content-center justify-center mx-auto mt-12'>
                {
                    rooms.map(room => <Room
                        key={room.id}
                        room={room}
                    ></Room>)
                }
            </div>
        </div>
    );
};

export default Home;