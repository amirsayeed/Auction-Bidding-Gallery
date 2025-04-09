import React from 'react';
import { GoHeart } from "react-icons/go";
const Bid = ({bid}) => {
    console.log(bid)
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
                <td><GoHeart size={20} /></td>
            </tr>
        </>
    );
};

export default Bid;