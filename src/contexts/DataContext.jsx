import { createContext, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { axiosPrivate } from '../api/axios';
import useAuth from '../hooks/useAuth';
const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const { auth, setAuth } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/user';
  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await axiosPrivate.post('/login', { email, password });
    console.log(response?.data);
    setAuth(response?.data);
    navigate(from, { replace: true });
  };
  return (
    <DataContext.Provider
      value={{
        isOpen,
        setIsOpen,
        handleLogin,
        email,
        setEmail,
        password,
        setPassword,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
