import React, { useEffect, useState } from 'react';
import { GoHeart } from "react-icons/go";
const Bids = () => {
    const [bids,setBids] = useState([]);

    useEffect(()=>{
        fetch('auction.json')
        .then(res=>res.json())
        .then(data=>console.log(data.bids))
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
                    <tr>
                        <td>
                        <div className="flex items-center gap-3">
                            <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                                <img
                                src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                alt="Avatar Tailwind CSS Component" />
                            </div>
                            </div>
                            <div>
                            <div className="font-bold">Hart Hagerty</div>
                            </div>
                        </div>
                        </td>
                        <td>
                        Zemlak, Daniel and Leannon
                        </td>
                        <td>Purple</td>
                        <td><GoHeart size={20} /></td>
                    </tr>
                
                    <tr>
                        <td>
                        <div className="flex items-center gap-3">
                            <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                                <img
                                src="https://img.daisyui.com/images/profile/demo/3@94.webp"
                                alt="Avatar Tailwind CSS Component" />
                            </div>
                            </div>
                            <div>
                            <div className="font-bold">Brice Swyre</div>
                            </div>
                        </div>
                        </td>
                        <td>
                        Carroll Group
                        </td>
                        <td>Red</td>
                        <td><GoHeart size={20} /></td>
                    </tr>
                    <tr>
                        <td>
                        <div className="flex items-center gap-3">
                            <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                                <img
                                src="https://img.daisyui.com/images/profile/demo/4@94.webp"
                                alt="Avatar Tailwind CSS Component" />
                            </div>
                            </div>
                            <div>
                            <div className="font-bold">Marjy Ferencz</div>
                            </div>
                        </div>
                        </td>
                        <td>
                        Rowe-Schoen
                        </td>
                        <td>Crimson</td>
                        <td><GoHeart size={20} /></td>
                    </tr>
                    
                    <tr>
                        <td>
                        <div className="flex items-center gap-3">
                            <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                                <img
                                src="https://img.daisyui.com/images/profile/demo/5@94.webp"
                                alt="Avatar Tailwind CSS Component" />
                            </div>
                            </div>
                            <div>
                            <div className="font-bold">Yancy Tear</div>
                            </div>
                        </div>
                        </td>
                        <td>
                        Wyman-Ledner
                        </td>
                        <td>Indigo</td>
                        <td><GoHeart size={20} /></td>
                    </tr>
                    <tr>
                        <td>
                        <div className="flex items-center gap-3">
                            <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                                <img
                                src="https://img.daisyui.com/images/profile/demo/5@94.webp"
                                alt="Avatar Tailwind CSS Component" />
                            </div>
                            </div>
                            <div>
                            <div className="font-bold">Yancy Tear</div>
                            </div>
                        </div>
                        </td>
                        <td>
                        Wyman-Ledner
                        </td>
                        <td>Indigo</td>
                        <td><GoHeart size={20} /></td>
                    </tr>
                    <tr>
                        <td>
                        <div className="flex items-center gap-3">
                            <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                                <img
                                src="https://img.daisyui.com/images/profile/demo/5@94.webp"
                                alt="Avatar Tailwind CSS Component" />
                            </div>
                            </div>
                            <div>
                            <div className="font-bold">Yancy Tear</div>
                            </div>
                        </div>
                        </td>
                        <td>
                        Wyman-Ledner
                        </td>
                        <td>Indigo</td>
                        <td><GoHeart size={20} /></td>
                    </tr>
                    </tbody>
                </table>
            </div>
    );
};

export default Bids;