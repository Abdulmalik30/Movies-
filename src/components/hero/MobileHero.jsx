import React from 'react';
import Slider from 'react-slick';

const MobileHero = ({ data, settings }) => {
  return (
    <Slider {...settings} className='md:hidden'>
      {data.slice(0, 3).map((dat) => (
        <div key={dat.id}>
          <img
            src={`https://image.tmdb.org/t/p/w300/${dat.poster_path}`}
            alt={`${dat.title} image`}
            className='w-full h-full object-cover'
          />
        </div>
      ))}
    </Slider>
  );
};

export default MobileHero;
