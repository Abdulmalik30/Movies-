import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const active = 'bg-[#f53535] p-2 rounded-lg p-2 text-white';
  return (
    <nav aria-label='main-nav' className='mx-6 hidden md:block'>
      <ul className='flex gap-3 capitalize '>
        <li>
          <Link to='/' className={location.pathname === '/' ? active : ''}>
            home
          </Link>
        </li>
        <li>
          <Link
            to='about'
            className={location.pathname === '/about' ? active : ''}
          >
            about
          </Link>
        </li>
        <li>
          <Link to='login' className='text-[#f53535] p-2 '>
            login
          </Link>
        </li>
        <li>
          <Link to='sign-up' className='text-[#f53535]'>
            sign up
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
