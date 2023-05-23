import React from 'react';
import { Link } from 'react-router-dom';
import useData from '../../hooks/useData';

const MovieMap = ({ movie }) => {
  const { imgPath } = useData();
  return (
    <Link to={`/user/movie/${movie.id}`}>
      <article className=' flex flex-col '>
        <img
          src={`${imgPath}/${movie.poster_path}`}
          alt={`${movie.title} image`}
        />
        <div className=' bg-[#f3e8e8] text-black p-6 w-full shadow-sm flex flex-col'>
          <small>{movie.title}</small>
          <small>{movie.release_date}</small>
        </div>
      </article>
    </Link>
  );
};

export default MovieMap;
