import React from 'react';
import banner from '../../assets/Banner-min.jpg'
const Banner = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <div className="hero min-h-screen"
                style={{
                    backgroundImage: `url(${banner})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }}>
                <div className="hero-overlay"></div>
                <div className="text-white text-left">
                    <div className='max-w-4xl'>
                    <h1 className="mb-5 text-5xl font-bold">Bid on Unique Items from<br/> Around the World</h1>
                    <p className="mb-5">
                        Discover rare collectibles, luxury goods, and vintage<br/> treasures in our curated auctions.
                    </p>
                    <button className="btn rounded-3xl text-black">Explore Auctions</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;