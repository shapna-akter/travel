import React from 'react';
import { Link } from 'react-router-dom';

const Room = ({ room }) => {
    const { image, name } = room;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="p-2">
                <img src={image} alt="Room" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center p-0 mb-4">
                <h2 className="card-title">{name}</h2>
                <div className="card-actions">
                    <Link to='/startbooking'><button className="btn btn-primary">Book Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Room;