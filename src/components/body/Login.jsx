import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useData from '../../hooks/useData';
const Login = () => {
  const { handleLogin, email, setEmail, password, setPassword } = useData();

  return (
    <div className='flex justify-center items-center h-screen bg-[#191818] text-white'>
      <form
        className='bg-transparent border border-tomato rounded-lg shadow-md p-8  w-[400px]'
        onSubmit={(e) => handleLogin(e)}
      >
        <div className='flex flex-col mb-4'>
          <label htmlFor='email' className='sr-only'>
            Email
          </label>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Email'
            aria-label='Enter your email address'
            className='py-2 px-3 bg-transparent border-b border-gray-400 focus:outline-none focus:border-tomato'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            spellCheck='false'
            autoComplete='off'
            required
            aria-required='true'
          />
        </div>
        <div className='flex flex-col mb-4'>
          <label htmlFor='password' className='sr-only'>
            Password
          </label>
          <input
            type='password'
            name='password'
            id='password'
            placeholder='Password'
            aria-label='Enter your password'
            className='py-2 px-3 bg-transparent border-b border-gray-400 focus:outline-none focus:border-tomato'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            spellCheck='false'
            autoComplete='off'
            required
            aria-required='true'
          />
        </div>
        <div className='flex justify-between items-center flex-row-reverse'>
          <button
            type='submit'
            className='bg-[tomato] text-white py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:bg-red-600'
          >
            Login
          </button>
          <p>
            don't have an account?{' '}
            <Link to='/sign-up' className='text-blue-700 underline '>
              sign up
            </Link>
          </p>
        </div>

        <input type='checkbox' aria-label='trust this device' id='persist' />
        <label htmlFor='persist' className='pl-1'>
          remember me
        </label>
      </form>
    </div>
  );
};

export default Login;
