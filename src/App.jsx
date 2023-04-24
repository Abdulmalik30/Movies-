import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Routes, Route } from 'react-router-dom';
import About from './components/body/About';
import Home from './components/body/Home';
import Login from './components/body/Login';
import SignUp from './components/body/SignUp';
import UserHome from './components/private/UserHome';
import Layout from './Layout';
import RequireAuth from './RequireAuth';
import UserLayout from './UserLayout';

const App = () => {
  return (
    // Routes that are available to all
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />

        <Route path='about' element={<About />} />
      </Route>
      <Route path='sign-up' element={<SignUp />} />
      <Route path='login' element={<Login />} />

      <Route path='/user' element={<UserLayout />}>
        <Route element={<RequireAuth />}>
          <Route index element={<UserHome />} />
        </Route>
      </Route>
    </Routes>

    // Private and protected routes
  );
};

export default App;
