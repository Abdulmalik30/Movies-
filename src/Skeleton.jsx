import React from 'react';
import { motion } from 'framer-motion';
import Skeleton from 'react-loading-skeleton';

const SkeletonLoader = () => {
  return (
    <div className='w-full max-w-md mx-auto rounded-lg overflow-hidden bg-gray-100'>
      <div className='relative pb-[56.25%]'>
        <motion.div
          className='absolute inset-0 bg-gray-300'
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        ></motion.div>
        <Skeleton height='100%' width='100%' />
      </div>
      <div className='py-4 px-6'>
        <Skeleton height={20} width='80%' />
      </div>
    </div>
  );
};

export default SkeletonLoader;
