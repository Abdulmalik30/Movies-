import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useData from '../../hooks/useData';
const SignUp = () => {
  const { handleRegister, email, setEmail, password, setPassword, errMsg } =
    useData();
  const [username, setUsername] = useState('');
  const userRef = useRef();
  const emailRef = useRef();
  const pwdRef = useRef();
  const emailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const userReg = /^[a-zA-Z0-9_\-]+$/;
  const pwdReg = /^[a-zA-Z0-9]{7,24}[._%+\-$#!&]$/;
  const [validUser, setValidUser] = useState(null);
  const [validEmail, setValidEmail] = useState(false);
  const [validPwd, setValidPwd] = useState(false);
  const [formValid, setFormValid] = useState(false);
  const checkValidUser = (e) => {
    const value = e.target.value;
    setUsername(value);
    if (userRef.current && userRef.current.value.length) {
      const result = userReg.test(value);
      setValidUser(result);
    }
  };

  useEffect(() => {
    setFormValid(validEmail && validPwd && validUser);
  }, [validEmail, validPwd, validUser]);

  const checkValidEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (emailRef.current && emailRef.current.value.length) {
      const result = emailReg.test(value);
      setValidEmail(result);
    }
  };

  const checkValidPwd = (e) => {
    const value = e.target.value;
    setPassword(value);
    if (pwdRef.current && pwdRef.current.value.length) {
      const result = pwdReg.test(value);
      setValidPwd(result);
    }
  };

  return (
    <div className='flex justify-center items-center h-screen bg-[#191818] text-white'>
      <form
        className='bg-transparent border border-tomato rounded-lg shadow-md p-8  w-[400px]'
        onSubmit={(e) => handleRegister(e)}
      >
        <div className='flex flex-col mb-4'>
          <p className='w-full mx-auto text-red-600 p-3'>{errMsg}</p>

          <label htmlFor='username' className='sr-only'>
            Username
          </label>
          <input
            type='text'
            ref={userRef}
            name='username'
            id='username'
            placeholder='Username'
            aria-label='Enter your username'
            className='py-2 px-3 bg-transparent border-b border-gray-400 focus:outline-none focus:border-tomato'
            value={username}
            onChange={(e) => checkValidUser(e)}
            spellCheck='false'
            autoComplete='off'
            required
            aria-required='true'
          />
          {userRef.current && userRef.current.value.length && !validUser ? (
            <p className='w-full mx-auto text-sm text-red-700'>
              username should be at least one character, underscores and hyphens
              are allowed
            </p>
          ) : null}
        </div>
        <div className='flex flex-col mb-4'>
          <label htmlFor='email' className='sr-only'>
            Email
          </label>
          <input
            type='email'
            name='email'
            id='email'
            ref={emailRef}
            placeholder='Email'
            aria-label='Enter your email address'
            className='py-2 px-3 bg-transparent border-b border-gray-400 focus:outline-none focus:border-tomato'
            value={email}
            onChange={(e) => checkValidEmail(e)}
            spellCheck='false'
            autoComplete='off'
            required
            aria-required='true'
          />
          {emailRef.current && emailRef.current.value.length && !validEmail ? (
            <p className='w-full mx-auto text-sm text-red-700'>
              email can be all caps or all lowercase, hyphens and underscores
              are valid and the @ is required
            </p>
          ) : null}
        </div>
        <div className='flex flex-col mb-4'>
          <label htmlFor='password' className='sr-only'>
            Password
          </label>
          <input
            type='password'
            name='password'
            id='password'
            ref={pwdRef}
            placeholder='Password'
            aria-label='Enter your password'
            className='py-2 px-3 bg-transparent border-b border-gray-400 focus:outline-none focus:border-tomato'
            value={password}
            onChange={(e) => checkValidPwd(e)}
            spellCheck='false'
            autoComplete='off'
            required
            aria-required='true'
          />

          {pwdRef.current && pwdRef.current.value.length && !validPwd ? (
            <p className='w-full mx-auto text-sm text-red-700'>
              password should be at least 8 characters long and must include
              some special characters such as $#%*!_-
            </p>
          ) : null}
        </div>
        <div className='flex justify-between items-center flex-row-reverse'>
          <button
            type='submit'
            className='bg-[tomato] text-white py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:bg-red-600'
            disabled={!formValid}
          >
            Register
          </button>
          <p>
            already a user?{' '}
            <Link to='/login' className='text-blue-700 underline '>
              login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
