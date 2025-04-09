import React, { useEffect, useState } from 'react';
import { GoHeart } from "react-icons/go";
import Bid from '../Bid/Bid';
const Bids = () => {
    const [bids,setBids] = useState([]);

    useEffect(()=>{
        fetch('auction.json')
        .then(res=>res.json())
        .then(data=>setBids(data.bids))
    },[])

    return (
            <div className="overflow-x-auto bg-[#FFFFFF] rounded-2xl p-3">
                <table className="table">
                    <thead>
                    <tr>
                        <th>Items</th>
                        <th>Current Bid</th>
                        <th>Time Left</th>
                        <th>Bid Now</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            bids.map(bid=><Bid key={bid.id} bid={bid}/>)
                        }
                    </tbody>
                </table>
            </div>
    );
};

export default Bids;