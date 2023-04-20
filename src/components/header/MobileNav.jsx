import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import DataContext from '../../contexts/DataContext';
import { useContext, useState, useRef, useEffect } from 'react';

const MobileNav = () => {
  const { isOpen, setIsOpen } = useContext(DataContext);
  const navRef = useRef();

  useEffect(() => {
    function handleClickOutsideNav(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutsideNav);
    return () => {
      document.removeEventListener('mousedown', handleClickOutsideNav);
    };
  }, [navRef]);

  const navVarient = {
    hidden: {
      x: '100vw',
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 1,
      },
    },
  };
  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <nav aria-label='mobile-nav' className='  md:hidden' ref={navRef}>
            <motion.ul
              className='flex gap-3 capitalize flex-col text-white h-screen absolute right-0 top-0 md:hidden  w-1/2 bg-black z-50 items-center justify-center'
              variants={navVarient}
              initial='hidden'
              animate='visible'
              exit={{
                x: '100vw',
                opacity: 0,
                transition: { duration: 1, type: 'tween' },
              }}
            >
              <button
                className='absolute  text-white right-3 text-4xl top-3'
                onClick={() => setIsOpen((prev) => !prev)}
              >
                &times;
              </button>
              <li>
                <Link
                  to='/'
                  className='text-2xl'
                  onClick={() => setIsOpen((prev) => !prev)}
                >
                  home
                </Link>
              </li>
              <li>
                <Link
                  to='about'
                  className='text-2xl'
                  onClick={() => setIsOpen((prev) => !prev)}
                >
                  about
                </Link>
              </li>
              <li>
                <Link
                  to='login'
                  className='text-[#f53535] p-2 rounded-lg text-2xl'
                  onClick={() => setIsOpen((prev) => !prev)}
                >
                  login
                </Link>
              </li>
              <li>
                <Link
                  to='sign-up'
                  className='text-[#f53535] text-2xl'
                  onClick={() => setIsOpen((prev) => !prev)}
                >
                  sign up
                </Link>
              </li>
            </motion.ul>
          </nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNav;
