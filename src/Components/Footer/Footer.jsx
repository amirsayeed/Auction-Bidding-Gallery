import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-horizontal footer-center border-t bg-[#FFFFFF] text-black p-10">
            <aside className='space-y-3'>
                <a className="text-2xl text-blue-400">Auction<span className='font-medium text-yellow-500'>Gallery</span></a>
                <div className='flex gap-4 text-lg font-medium'>
                    <p>Bid.</p>
                    <p>Win.</p>
                    <p>Own.</p>
                </div>
                <div>
                    <ul className='flex gap-5 text-lg'>
                        <li><a href="">Home</a></li>
                        <li><a href="">Auctions</a></li>
                        <li><a href="">Category</a></li>
                        <li><a href="">How to works</a></li>
                    </ul>
                </div>
                <p> © {new Date().getFullYear()} AuctionHub - All right reserved</p>
            </aside>
            </footer>
        </div>
    );
};

export default Footer;