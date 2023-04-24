import React from 'react';
import { FaArrowRight, FaArrowsAlt, FaLongArrowAltRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const UserAside = () => {
  return (
    <div className='col-span-2  h-full bg-black border-r text-white flex flex-col justify-between py-4 px-2'>
      <ul className='flex flex-col'>
        <li className='flex justify-between items-center'>
          <Link to='#' className='my-2 hover:text-gray-300 mx-2'>
            Link 1
          </Link>
          <FaLongArrowAltRight className='text-1xl mx-2' />
        </li>

        <li className='flex justify-between items-center'>
          <Link to='#' className='my-2 hover:text-gray-300 mx-2'>
            Link 2
          </Link>
          <FaLongArrowAltRight className='text-1xl mx-2' />
        </li>

        <li className='flex justify-between items-center'>
          <Link to='#' className='my-2 hover:text-gray-300 mx-2'>
            Link 3
          </Link>
          <FaLongArrowAltRight className='text-1xl mx-2' />
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
