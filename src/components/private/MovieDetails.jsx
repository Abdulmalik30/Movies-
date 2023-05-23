import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { axiosApi } from '../../api/axios';
import useData from '../../hooks/useData';

const MovieDetails = () => {
  const { id } = useParams(); // extract the id parameter value
  const [movie, setMovie] = useState(null); // update to a single movie state
  const { imgPath, apiKey } = useData(); // add imgPath from useData

  const getMovie = async () => {
    const response = await axiosApi.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
    );
    setMovie(response.data); // update the movie state with the response data
  };

  useEffect(() => {
    getMovie();
  }, [id]); // call getMovie whenever the id parameter changes

  if (!movie) {
    // add a loading state to the component
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <img
        src={`${imgPath}/${movie.poster_path}`}
        alt={`${movie.title} image`}
      />
      <p>{movie.overview}</p>
      <p>Release date: {movie.release_date}</p>
      <p>Rating: {movie.vote_average}</p>
    </div>
  );
};

export default MovieDetails;
