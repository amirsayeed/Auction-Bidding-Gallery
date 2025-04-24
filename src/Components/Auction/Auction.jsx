import React from 'react';
import Bids from '../Bids/Bids';
import Favourite from '../Favourite/Favourite';

const Auction = ({hideContent,handleAddFavourite,favourites,total,handleRemoveFavourite}) => {

    return (
        <div className='bg-[#EBF0F5]'>
            <div className='py-30 max-w-7xl mx-auto sora'>
                <div className='space-y-5'>
                    <h3 className='text-2xl md:text-3xl font-medium text-[#0E2954]'>Active Auctions</h3>
                    <p className='md:text-xl font-normal'>Discover and bid on extraordinary items</p>
                </div>
                <div className='flex flex-col lg:flex-row gap-5 mt-10 px-1 lg:px-0'>
                    <div className='w-full lg:w-[70%] '>
                        <Bids 
                            handleAddFavourite={handleAddFavourite}
                            favourites={favourites} />
                    </div>
                    <div className='w-full lg:w-[30%]'>
                        <Favourite 
                            hideContent={hideContent} 
                            favourites={favourites} 
                            total={total} 
                            handleRemoveFavourite={handleRemoveFavourite}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Auction;