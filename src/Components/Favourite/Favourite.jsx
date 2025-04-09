import React from 'react';
import { GoHeart } from "react-icons/go";
const Favourite = () => {
    return (
            <div className="card bg-base-100 shadow-sm p-3 space-y-2">
                <div className='flex items-center justify-center gap-2'>
                    <span><GoHeart size={20} /></span>
                    <h2 className='text-xl font-medium'>Favourite Items</h2>
                </div>
                <div className='border border-dashed border-gray-300 mt-4'></div>
                <div className="card-body my-3 text-center">
                    <h4 className='text-lg font-medium'>No favorites yet</h4>
                    <p>Click the heart icon on any item to add it to your favorites</p>
                </div>
                <div className='border border-dashed border-gray-300 mt-4'></div>
                <div className='flex justify-between'>
                    <p>Total Bids Amount</p>
                    <p></p>
                </div>
            </div>
    );
};

export default Favourite;