import { Outlet } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
const Layout = () => {
  return (
    <div className='w-full h-full'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
