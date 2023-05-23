import React, { useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import { useNavigate } from 'react-router-dom';
import { axiosApi, axiosPrivate } from '../../api/axios';
import useAuth from '../../hooks/useAuth';
import useData from '../../hooks/useData';
import SkeletonLoader from '../../SkeletonLoader';
import MovieMap from './MovieMap';

const UserHome = () => {
  const { auth, setAuth } = useAuth();
  const { movies, setMovies, isLoading, setIsLoading } = useData();
  const navigate = useNavigate();
  const getMovies = async () => {
    try {
      setIsLoading(true);
      const response = await axiosApi.get('/');
      setMovies(response.data.results);
      setIsLoading(false);
      console.log(movies);
    } catch (error) {
      console.log(error);
      // setIsLoading(false);
    }
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <main
      className={`grid grid-cols-4 w-full md:grid-cols-2  py-1 lg:grid-cols-3 gap-3  ${
        movies.length ? 'h-max' : 'h-screen'
      }`}
    >
      {movies.map((movie) => (
        <MovieMap movie={movie} key={movie.id} />
      ))}
      {isLoading &&
        [...Array(10).keys()].map((i) => <SkeletonLoader key={i} />)}
    </main>
  );
};

export default UserHome;
