import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="sora footer footer-horizontal footer-center bg-[#FFFFFF] text-black px-10 py-20">
            <aside className='space-y-3'>
                <a className="text-3xl text-blue-400">Auction<span className='font-semibold text-yellow-500'>Gallery</span></a>
                <div className='flex gap-4 text-xl font-medium'>
                    <p>Bid.</p>
                    <p>Win.</p>
                    <p>Own.</p>
                </div>
                <div>
                    <ul className='poppins flex gap-8 text-lg'>
                        <li><a href="">Home</a></li>
                        <li><a href="">Auctions</a></li>
                        <li><a href="">Category</a></li>
                        <li><a href="">How to works</a></li>
                    </ul>
                </div>
                <p className='text-lg'> © {new Date().getFullYear()} AuctionHub. All right reserved</p>
            </aside>
            </footer>
        </div>
    );
};

export default Footer;