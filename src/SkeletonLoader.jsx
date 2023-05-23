import React from 'react';
import { motion } from 'framer-motion';
import Skeleton from 'react-loading-skeleton';

const SkeletonLoader = () => {
  return (
    <div className='flex flex-col gap-2 animate-pulse'>
      <div className='w-60 h-60 bg-gray-700'></div>
      <p className='w-60 h-3 bg-gray-700  rounded-full'></p>
    </div>
  );
};

export default SkeletonLoader;
