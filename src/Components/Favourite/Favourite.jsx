import React from 'react';
import { GoHeart } from "react-icons/go";
import { RxCross1 } from "react-icons/rx";
const Favourite = ({favorites}) => {
    return (
            <div className="card bg-base-100 shadow-sm rounded-2xl p-4 space-y-2">
                <div className='flex items-center justify-center gap-2'>
                    <span><GoHeart size={20} /></span>
                    <h2 className='text-xl font-medium'>Favourite Items</h2>
                </div>
                <div className='border border-dashed border-gray-300 mt-4'></div>
                <div id="no-content" className="card-body my-3 text-center">
                    <h4 className='text-lg font-medium'>No favorites yet</h4>
                    <p>Click the heart icon on any item to add it to your favorites</p>
                </div>
                <div>
                    {
                        favorites.map((favorite,idx) => <div key={idx} className="border-b  border-dashed flex gap-5 items-center justify-between p-2">
                                <div className="avatar">
                                    <div className='h-12 w-12'>
                                    <img src={favorite.image} alt="" />
                                    </div>
                                </div>
                                <div className='max-w-40'>
                                    <p>{favorite.title}</p>
                                    <div className='flex gap-4'>
                                        <p>${favorite.currentBidPrice}</p>
                                        <p>Bids: {favorite.bidsCount}</p>
                                    </div>
                                </div>
                                <button><RxCross1 size={20} /></button>
                        </div>)
                    }
                </div>
                <div className='border border-dashed border-gray-300 mt-4'></div>
                <div className='flex justify-between text-lg font-bold'>
                    <p>Total Bids Amount</p>
                    <p>$0000</p>
                </div>
            </div>
    );
};

export default Favourite;