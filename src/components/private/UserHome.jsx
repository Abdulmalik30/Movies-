import React, { useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import { useNavigate } from 'react-router-dom';
import { axiosApi, axiosPrivate } from '../../api/axios';
import useAuth from '../../hooks/useAuth';
import useData from '../../hooks/useData';
import SkeletonLoader from '../../Skeleton';
import MovieMap from './MovieMap';

const UserHome = () => {
  const { auth, setAuth } = useAuth();
  const { movies, setMovies, imgPath, isLoading, setIsLoading, searchValue } =
    useData();
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
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <main className='grid grid-cols-3 gap-3'>
      {movies.map((movie) => (
       <MovieMap />
      ))}
      {isLoading && <SkeletonLoader />}
    </main>
  );
};

export default UserHome;
