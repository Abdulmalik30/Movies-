import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { axiosApi } from '../../api/axios';

const Hero = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axiosApi.get('/');

      setData(response.data.results);
    };
    getData();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Slider {...settings}>
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

export default Hero;
