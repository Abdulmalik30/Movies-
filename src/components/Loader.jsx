import { motion } from 'framer-motion';
import React from 'react';

const loaderVariants = {
  animation: {
    rotate: [0, 360],
    transition: {
      duration: 1.5,
      ease: 'easeInOut',
      repeat: Infinity,
    },
  },
};

const Loader = () => {
  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50'>
      <div className='relative flex items-center justify-center rounded-full h-16 w-16'>
        <div className='absolute inset-0 flex items-center justify-center'>
          <motion.div
            className='border-b-0 border-t border-r-0 border-l-0 h-20 w-20 rounded-full bg-transparent'
            variants={loaderVariants}
            animate='animation'
          ></motion.div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
