import { createContext, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios, { axiosPrivate } from '../api/axios';
import useAuth from '../hooks/useAuth';
const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const { auth, setAuth } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/user';
  const [errMsg, setErrMsg] = useState('');

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
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
