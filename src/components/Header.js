import React from 'react'
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/")
      // Sign-out successful.
    }).catch((error) => {
        navigate("/error")
      // An error happened.
    });
  }
  return (
    <div className='flex justify-between absolute w-screen px-8 py-4 bg-gradient-to-b from-black z-10'>        
        <img 
        className='w-44'
        src='https://youareawful.com/img/streamberry.a33c452d.svg'
        alt='logo'
        />
        {user && <div className='flex'>
          <img className='w-9 h-9 ' alt='usericon' src='https://netflixui-eight.vercel.app/static/media/user.265c314a69c617ffece1.jpg' />
          <button onClick={handleSignOut} className='font-bold text-white '>(Sign Out)</button>
        </div>}
    </div>
  )
}

export default Header;