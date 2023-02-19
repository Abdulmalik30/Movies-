import { Router, Routes, Route } from 'react-router-dom';
import About from './components/body/About';
import Home from './components/body/Home';
import Login from './components/body/Login';
import SignUp from './components/body/SignUp';
import Layout from './Layout';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />

        <Route path='about' element={<About />} />
      </Route>
      <Route path='sign-up' element={<SignUp />} />
      <Route path='login' element={<Login />} />
    </Routes>
  );
};

export default App;
