import React, { useDebugValue, useEffect } from 'react'
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constrants';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
        navigate("/error")
      // An error happened.
    });
  };

  useEffect(() =>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in,
        const {uid,email,displayName} = user;
        dispatch(addUser({uid:uid, email:email, displayName: displayName }));
        navigate("/browse")
      } else {
        // User is signed out
       dispatch(removeUser());
       navigate("/")
      }
    });
    // unsubscribe when component unmounts
    return () => unsubscribe();
  }, [])

  return (
    <div className='flex justify-between absolute w-screen px-8 py-4 bg-gradient-to-b from-black z-10'>        
        <img 
        className='w-44'
        src={LOGO}
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