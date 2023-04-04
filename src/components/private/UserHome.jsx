import { useEffect } from 'react';
import { axiosPrivate } from '../../api/axios';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
const UserHome = () => {
  const { auth } = useAuth();
  useEffect(() => {
    console.log(auth);
    const getUserDetails = async () => {
      const response = await axiosPrivate.get('/user', {
        headers: {
          Authorization: `Bearer ${auth.accessToken}`,
        },
      });

      console.log(response);
    };
    getUserDetails();
  }, [auth]);

  const handleRefresh = async () => {
    // const config = {
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Access-Control-Allow-Origin': 'http://127.0.0.1:5173',
    //     'Access-Control-Allow-Credentials': 'true',
    //   },
    //   withCredentials: true,
    // };

    try {
      const response = await axios.get(
        'http://localhost:5000/refresh',
        {
          withCredentials: true,
          credentials: 'include',
        }
      );
      const accessToken = response.data;
      return accessToken;
    } catch (error) {
      console.error(error);
      throw new Error('Failed to refresh access token');
    }
  };

  return (
    <div>
      <h1>user</h1>
      <button onClick={() => handleRefresh()}>refresh</button>
    </div>
  );
};

export default UserHome;
