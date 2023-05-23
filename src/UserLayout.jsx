import React from 'react';
import { Outlet } from 'react-router-dom';
import UserNav from './components/private/UserNav';
import UserSidebar from './components/private/UserSidebar';

const UserLayout = () => {
  return (
    <main className='pt-[57px] bg-[#212121] text-white'>
      <div className='w-full h-14 top-0 fixed z-50'>
        <UserNav />
      </div>
      <div className=' w-full'>
        <div className=' fixed w-28 h-full hidden lg:block'>
          <UserSidebar />
        </div>
      </div>
      <div className=' lg:pl-28 lg:ml-2 mt-2 pt-1 h-max'>
        <Outlet />
      </div>
    </main>
  );
};

export default UserLayout;
