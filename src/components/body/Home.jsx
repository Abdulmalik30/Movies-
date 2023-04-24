import React, { Suspense } from 'react';
import Hero from '../hero/Hero';

const Home = () => {
  return (
    <main>
      <Suspense fallback={<div>Loading....</div>}>
        <Hero />
      </Suspense>
    </main>
  );
};

export default Home;
