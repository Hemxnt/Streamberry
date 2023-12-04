import React, { useRef } from 'react'; 
import { useState } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/validate';

const Login = () => {
    const [isSignInForm, setIsSignInForm] =  useState(true);
    const [errorMessage, setErrorMessage] = useState(null)

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick = () => {
         // validate the form data 
        const message = checkValidData(email.current.value,password.current.value)
        setErrorMessage(message);

    }

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }

  return (
    <div>

        <Header/>

        {/* background Image */}
            <div className='absolute w-full'>
                <img className='w-full h-screen object-cover' 
                src="https://png.pngtree.com/thumb_back/fw800/background/20230615/pngtree-wall-of-movie-posters-on-display-image_2949343.jpg" 
                alt='background'/>
            </div>
        
        <form 
        onSubmit={(e)=>e.preventDefault}
        className='md:w-3/12 absolute  p-8 bg-black  my-16 mx-auto right-0 left-0 text-white rounded bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4'>
            {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && <input 
        ref={name}
        type='text'
        placeholder='Full Name'
        className='p-4 my-4 w-full bg-gray-700'
        />}
        <input 
        ref={email}
        type='text'
        placeholder='Email Address'
        className='p-4 my-4 w-full bg-gray-700'
        />
        <input 
        ref={password}
        type='text'
        placeholder='Password'
        className='p-4 my-4 w-full bg-gray-700'
        />
        <p className='text-red-600 font-bold '>{errorMessage}</p>
        <button className='p-4 my-6 bg-red-700 w-full rounded-lg ' onClick={handleButtonClick}>
        {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
        {isSignInForm ? 
        "New to Streamberry? Sign Up Now" : 
        "Already Registered? Sign In Now."}
        </p>

        </form>
        
        

        

    </div>
  )
}

export default Login