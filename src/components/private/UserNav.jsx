import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import useData from '../../hooks/useData';

const UserNav = () => {
  const { searchValue, handleSearch, setSearchValue } = useData();
  return (
    <nav className='w-full h-20 flex gap-2  bg-black justify-between items-center'>
      <h1>LOGO</h1>
      <div className='flex items-center justify-start'>
        <FaSearch
          className=' absolute right-5 hover:text-[tomato]'
          onClick={(e) => handleSearch(e)}
        />
        <input
          type='search'
          aria-label='search movies'
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className='rounded-lg outline-none p-2 mx-3 bg-transparent'
          placeholder='search movies'
        />
      </div>
    </nav>
  );
};

export default UserNav;
