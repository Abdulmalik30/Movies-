import { motion } from 'framer-motion';

const Loader = () => {
  const loaderVarient = {
    visible: {
      rotate: [0, 360],
      transition: {
        yoyo: Infinity,
        type: 'tween',
        duration: 1,
      },
    },
  };
  return (
    <div className='h-screen w-screen z-50 absolute top-0 bg-[hsl(0,2%,24%)] grid place-content-center'>
      <motion.div
        className='h-10 w-10 rounded-full bg-transparent border-t'
        variants={loaderVarient}
        animate='visible'
      ></motion.div>
    </div>
  );
};

export default Loader;
