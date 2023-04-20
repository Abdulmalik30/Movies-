import React, { useEffect } from 'react';
import { axiosPrivate } from '../../api/axios';
import useAuth from '../../hooks/useAuth';

const UserHome = () => {
  const { auth, setAuth } = useAuth();

  const getUser = async () => {
    const response = await axiosPrivate.get('/user');
    console.log(response.data);
  };
  // useEffect(() => {
  //   const accessToken = localStorage.getItem('token');
  //   setAuth({ accessToken });
  //   getUser();
  // }, []);
  return (
    <div>
      <p>user</p>
      <button onClick={getUser}>get user</button>
    </div>
  );
};

export default UserHome;
