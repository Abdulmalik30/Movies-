import React, { useContext } from 'react';
import DataContext from '../../contexts/DataContext';
const NavBtn = () => {
  const { isOpen, setIsOpen } = useContext(DataContext);
  return (
    <>
      <button
        className='relative h-1 w-6 md:hidden outline-none mx-6'
        onClick={() => setIsOpen(true)}
      >
        <div
          className='absolute w-full h-full bg-white rounded-full
		  before:w-full before:h-full before:bg-white before:-translate-y-2 before:absolute before:rounded-full before:-translate-x-3  after:w-full after:h-full after:bg-white after:translate-y-2 after:absolute after:rounded-full after:-translate-x-3'
        ></div>
      </button>
    </>
  );
};

export default NavBtn;
