import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const UserAside = () => {
  const location = useLocation();
  return (
    <div className=' h-screen w-full bg-black border-r text-white flex-col justify-between py-4 px-2 hidden md:flex'>
      <ul className='flex flex-col'>
        <li className='flex justify-between items-center'>
          <Link
            to='/user'
            className={`${
              location.pathname === '/user' ? 'text-[tomato]' : 'inherit'
            }`}
          >
            Trending
          </Link>
        </li>

        <li className='flex justify-between items-center'>
          <Link
            to='/user'
            className={`${
              location.pathname === '/on-the-air' ? 'text-[tomato]' : 'inherit'
            }`}
          >
            On the air
          </Link>
        </li>

        <li className='flex justify-between items-center'>
          <Link
            to='/user'
            className={`${
              location.pathname === '/watchlist' ? 'text-[tomato]' : 'inherit'
            }`}
          >
            watchlist
          </Link>
        </li>
      </ul>
      <div>
        <p className='text-xs text-gray-500 text-center'>
          © {new Date().getFullYear()} My Website
        </p>
      </div>
    </div>
  );
};

export default UserAside;
