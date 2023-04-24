import { createContext, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios, { axiosPrivate } from '../api/axios';
import useAuth from '../hooks/useAuth';
const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [imgPath, setImgPath] = useState('https://image.tmdb.org/t/p/original');
  const apiKey = 'a08fd2babde004fa470f85d6f7aa35f9';
  const [searchValue, setSearchValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [movies, setMovies] = useState([]);
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const { auth, setAuth } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/user';
  const [errMsg, setErrMsg] = useState('');

  const handleSearch = async (e) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchValue}`
    );
    setMovies(response.data.results);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await axios.post('/login', { email, password });
      console.log(response?.data);
      setAuth(response.data.accessToken);
      localStorage.setItem(
        'token',
        JSON.parse(JSON.stringify(response.data.accessToken))
      );
      setIsLoading(false);
      navigate('/user');
    } catch (error) {
      console.log(error);
      setErrMsg(error?.response?.data?.message);
      navigate('/login', { replace: true });
    } finally {
      setIsLoading(false);
    }
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await axios.post('/register', {
        username,
        email,
        password,
      });
      console.log(response?.data);
      setAuth(response.data.accessToken);
      localStorage.setItem(
        'token',
        JSON.parse(JSON.stringify(response.data.accessToken))
      );
      setIsLoading(false);
      navigate('/user');
    } catch (error) {
      console.log(error);
      setErrMsg(error?.response?.data?.message);
      navigate('/sign-up', { replace: true });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <DataContext.Provider
      value={{
        isOpen,
        auth,
        setAuth,
        setIsOpen,
        isLoading,
        setIsLoading,
        handleLogin,
        handleRegister,
        email,
        setEmail,
        password,
        setPassword,
        errMsg,
        setErrMsg,
        movies,
        setMovies,
        imgPath,
        setImgPath,
        apiKey,
        handleSearch,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
