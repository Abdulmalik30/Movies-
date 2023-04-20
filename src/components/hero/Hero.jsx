import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { axiosApi } from '../../api/axios';
import { FaPlay } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axiosApi.get('/trending/movie/day');
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

  const backgroundStyle = {
    backgroundImage: `url(https://image.tmdb.org/t/p/original/${data[1]?.backdrop_path})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  };

  const heroContentStyle = 'text-center text-white';

  return (
    <section className='relative '>
      <div className='absolute inset-0' style={backgroundStyle}></div>
      <div className='relative z-10'>
        <div className={`container mx-auto py-12 lg:py-32 ${heroContentStyle}`}>
          <h1 className='text-5xl font-bold'>{data[1]?.title}</h1>
          <p className='mt-4 text-lg'>{data[1]?.overview}</p>
          <div className='flex justify-center items-center mt-6'>
            <Link to='/login'>
              <button className='bg-white text-gray-900 py-2 px-4 rounded-lg mr-4 hover:bg-[tomato]'>
                Get Started
              </button>
            </Link>

            <FaPlay className='text-[#121212] text-4xl' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
