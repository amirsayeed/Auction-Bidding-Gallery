import React from 'react';
import banner from '../../assets/Banner-min.jpg'
const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" 
                style={{
                    backgroundImage: `url(${banner})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center'
                }}>
                <div className="relative lg:-left-80 text-white">
                    <div className='max-w-4xl sora text-left'>
                    <h1 className="mb-5 text-5xl font-semibold">Bid on Unique Items from<br/> Around the World</h1>
                    <p className="mb-5 text-2xl font-light opacity-80">
                        Discover rare collectibles, luxury goods, and vintage<br/> treasures in our curated auctions.
                    </p>
                    <button className="btn rounded-4xl text-[#010000] font-medium text-lg">Explore Auctions</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;