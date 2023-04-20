import React, { useEffect } from 'react';

const useCheckAuth = () => {
  const checkAuth = () => {
    const { auth, setAuth } = useAuth();

    const acessToken = localStorage.getItem('token');

    setAuth({ acessToken });
    return auth;
  };
  useEffect(() => {
    checkAuth();
  }, []);
  return { auth, checkAuth };
};

export default useCheckAuth;
