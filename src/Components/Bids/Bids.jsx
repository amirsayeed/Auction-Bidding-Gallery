import React, { useEffect, useState } from 'react';
import Bid from '../Bid/Bid';
import BidCard from '../Bid/BidCard';
const Bids = ({handleAddFavourite,favourites}) => {
    const [bids,setBids] = useState([]);

    useEffect(()=>{
        fetch('auction.json')
        .then(res=>res.json())
        .then(data=>setBids(data.bids))
    },[])

    return (
            <>
                <div className="overflow-x-auto bg-[#FFFFFF] rounded-2xl p-3 sora hidden md:flex">
                <table className="table">
                    <thead className='md:text-lg font-medium text-[#000000] pt-4'>
                    <tr>
                        <th>Items</th>
                        <th>Current Bid</th>
                        <th>Time Left</th>
                        <th>Bid Now</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            bids.map(bid=>
                            <Bid key={bid.id} 
                            bid={bid}
                            handleAddFavourite={handleAddFavourite}
                            favourites={favourites}
                            />)
                        }
                    </tbody>
                </table>
            </div>

            <div className='grid grid-cols-1 gap-5 md:hidden px-2 md:px-0'>
                {
                   bids.map(bid=>
                            <BidCard key={bid.id} 
                            bid={bid}
                            handleAddFavourite={handleAddFavourite}
                            favourites={favourites}
                            />)
                }
            </div>
            </>
            
    );
};

export default Bids;