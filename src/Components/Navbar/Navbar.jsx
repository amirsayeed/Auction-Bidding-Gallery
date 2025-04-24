import React from 'react';

const Navbar = () => {

    const links = <>
                    <li><a href="">Home</a></li>
                    <li><a href="">Auctions</a></li>
                    <li><a href="">Category</a></li>
                    <li><a href="">How to works</a></li>
                  </>
    return (
        <div className='max-w-7xl mx-auto'>
            <div className="navbar poppins text-[#000000]">
                <div className="navbar-start gap-1">
                     <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="text-xl lg:text-3xl text-blue-400">Auction<span className='font-semibold text-yellow-500'>Gallery</span></a>
                </div>
                <div className="navbar-center hidden md:flex">
                    <ul className='flex gap-3 lg:gap-8 text-lg lg:text-xl font-normal'>
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-2">
                    <div className="btn bg-[#EBF0F5] btn-circle">
                        <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /> </svg>
                        <span className="badge badge-xs badge-primary indicator-item">0</span>
                        </div>
                    </div>
                    <div className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                        <img
                            alt="Tailwind CSS Navbar component"
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;