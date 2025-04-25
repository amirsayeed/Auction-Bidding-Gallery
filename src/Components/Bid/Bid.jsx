import React from 'react';
import { GoHeart, GoHeartFill } from "react-icons/go";

const Bid = ({bid, handleAddFavourite,favourites}) => {
    const {image,title,currentBidPrice,timeLeft,id} = bid;
    
    const isFavourite = favourites.find(fav=> fav.id === id);
    
    const handleClick = () =>{
        if(!isFavourite){
        handleAddFavourite(bid,currentBidPrice);
        }
    }

    return (
        <>
            <tr>
                <td>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="w-10 h-10 md:h-16 md:w-16">
                                <img src={image} />
                            </div>
                        </div>
                        <div>
                            <div className="font-semibold">{title}</div>
                        </div>
                    </div>
                </td>
                <td className='font-semibold text-center'>${currentBidPrice.toLocaleString()}</td>
                <td className='font-medium text-center'>{timeLeft}</td>

                <td className='text-center'>
                    <button onClick={handleClick}
                        disabled={isFavourite}
                        className={isFavourite ? 'cursor-not-allowed' : 'cursor-pointer'}
                        >
                        {isFavourite ? 
                            <GoHeartFill size={20} color="red" /> : 
                            <GoHeart size={20} />
                        }
                    </button>
                </td>
                
            </tr>
        </>
    );
};

export default Bid;