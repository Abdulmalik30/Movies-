import React from 'react';
import MobileNav from './MobileNav';
import Navbar from './Navbar';
import NavBtn from './NavBtn';

const Header = () => {
  return (
    <header className='w-full h-20 items-center flex bg-black text-white justify-between'>
      <h1 className='text-3xl font-bold font-mono mx-6 text-[#f53535]'>logo</h1>
      <Navbar />
      <MobileNav />
      <NavBtn />
    </header>
  );
};

export default Header;
