import React from 'react';
import { GoHeart } from "react-icons/go";
const Bid = ({bid, handleAddFavourite}) => {
    const {image,title,currentBidPrice,timeLeft} = bid;
    return (
        <>
            <tr>
                <td>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="h-12 w-12">
                                <img src={image} />
                            </div>
                        </div>
                        <div>
                            <div className="font-medium">{title}</div>
                        </div>
                    </div>
                </td>
                <td className='font-medium'>${currentBidPrice}</td>
                <td className='font-medium'>{timeLeft}</td>
                <td><button onClick={()=>handleAddFavourite(bid,bid.currentBidPrice)}><GoHeart size={20} /></button></td>
            </tr>
        </>
    );
};

export default Bid;