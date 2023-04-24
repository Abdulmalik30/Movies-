import React from 'react';
import { Outlet } from 'react-router-dom';
import UserSidebar from './components/private/UserSidebar';
import UserNav from './components/private/UserNav';

const UserLayout = () => {
  return (
    <div className='bg-[#212121] text-white'>
      <UserNav />
      <main className='grid grid-cols-12'>
        <UserSidebar />
        <div className='col-span-10'>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default UserLayout;
