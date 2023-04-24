import React from 'react';

const MovieMap = ({ movie }) => {
  return (
    <article key={movie.id} className='h-45 w-45'>
      <img
        src={`${imgPath}/${movie.poster_path}`}
        alt={`${movie.title} image`}
      />
      <small>{movie.title}</small>
    </article>
  );
};

export default MovieMap;
