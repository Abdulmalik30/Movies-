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

      <Route element={<RequireAuth />}>
        <Route path='/user' element={<UserHome />} />
      </Route>
    </Routes>

    // Private and protected routes
  );
};

export default App;
