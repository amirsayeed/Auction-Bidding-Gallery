import React from 'react';
import { GoHeart, GoHeartFill } from "react-icons/go";

const BidCard = ({bid,handleAddFavourite,favourites}) => {
    const {image,title,currentBidPrice,timeLeft,id} = bid;

    const isFavourite = favourites.find(fav=> fav.id === id);
    
    const handleClick = () =>{
        if(!isFavourite){
        handleAddFavourite(bid,currentBidPrice);
        }
    }

    return (
        <div className="card bg-base-200 shadow-md rounded-2xl">
        <figure>
            <img className='p-5 rounded-3xl w-full h-[200px] object-cover'
            src={image}/>
        </figure>
        <div className="card-body space-y-2">
            <h2 className="card-title">{title}</h2>
            <div className='flex gap-2 justify-between'>
                <p className='font-semibold'>Current Bid : ${currentBidPrice.toLocaleString()}</p>
                <p className='font-semibold'>Time Left : {timeLeft}</p>
            </div>
            <div className="card-actions justify-center">
            <button onClick={handleClick}
                disabled={isFavourite}
                className={isFavourite ? 'cursor-not-allowed' : 'cursor-pointer'}
                                    >
                {isFavourite ? 
                    <GoHeartFill size={20} color="red" /> : 
                    <GoHeart size={20} />
                }
            </button>
            </div>
        </div>
        </div>
    );
};

export default BidCard;