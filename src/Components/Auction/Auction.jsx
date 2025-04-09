import React from 'react';
import Bids from '../Bids/Bids';
import Favourite from '../Favourite/Favourite';

const Auction = ({handleAddFavourite,favorites}) => {

    return (
        <div className='bg-[#EBF0F5]'>
            <div className='pt-20 max-w-7xl mx-auto'>
                <h3 className='text-2xl'>Active Auctions</h3>
                <p className='text-lg'>Discover and bid on extraordinary items</p>
                <div className='flex gap-5 pb-10 mt-10'>
                    <div className='w-[70%]'>
                        <Bids handleAddFavourite={handleAddFavourite} />
                    </div>
                    <div className='w-[30%]'>
                        <Favourite favorites={favorites} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Auction;