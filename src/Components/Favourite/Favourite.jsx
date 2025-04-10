import React from 'react';
import { GoHeart } from "react-icons/go";
import { RxCross1 } from "react-icons/rx";
const Favourite = ({hideContent,favourites,total,handleRemoveFavourite}) => {
    return (
            <div className="bg-base-100 shadow-sm rounded-2xl p-4 space-y-2 sora">
                <div className='flex items-center justify-center gap-2 pt-2'>
                    <span><GoHeart size={25} /></span>
                    <h2 className='text-2xl font-medium text-[#0E2954]'>Favourite Items</h2>
                </div>
                <div className='border border-dashed border-gray-300 mt-4'></div>
                
                {hideContent && (
                    <div className="p-4 text-center space-y-2">
                        <h4 className='text-xl font-medium'>No favorites yet</h4>
                        <p className='px-3'>Click the heart icon on any item to add it to your favorites</p>
                        <div className='border border-dashed border-gray-300 mt-4'></div>
                    </div>
                )}
                
                <div>
                    {
                        favourites.map((favourite,idx) => <div key={idx} className="border-b border-dashed border-gray-300 flex gap-5 items-start justify-between px-2 py-3 text-[#0E2954]">
                                <div className="avatar">
                                    <div className='h-16 w-16'>
                                    <img src={favourite.image} alt="" />
                                    </div>
                                </div>
                                <div className='space-y-3'>
                                    <p>{favourite.title}</p>
                                    <div className='flex gap-4'>
                                        <p>${favourite.currentBidPrice.toLocaleString()}</p>
                                        <p>Bids: {favourite.bidsCount}</p>
                                    </div>
                                </div>
                                <button className='hover:text-red-400' onClick={()=>handleRemoveFavourite(favourite.id,favourite.currentBidPrice)}><RxCross1 size={20} />
                                </button>
                        </div>)
                    }
                </div>
                <div className='flex justify-between text-xl font-medium py-2'>
                    <p>Total Bids Amount</p>
                    <p>${total.toLocaleString()}</p>
                </div>
            </div>
    );
};

export default Favourite;