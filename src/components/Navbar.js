import React from 'react';
import { SlOptionsVertical } from 'react-icons/sl';
import { GrClose } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useMediaQuery } from '@mui/material';
import logo from '../assets/logo.png';

const Navbar = () => {
  const isNonMobileScreens = useMediaQuery('(min-width: 700px');
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);

  useEffect(() => {
    setIsMobileMenuToggled(false);
  }, [isNonMobileScreens]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className='flex flex-col w-full bg-primary-bg p-3'>

      {/* Desktop Nav */}
      {
        isNonMobileScreens
          ? (
            <div className='flex flex-row items-center justify-between'>
              <div className='cursor-pointer'>
                <Link to={'home'}>
                  <img src={logo} alt="personal logo" className='h-16' />
                </Link>
              </div>
              <div className='flex gap-3 mr-5 text-xl font-bold'>
                <Link className='p-1 rounded hover:bg-secondary active:bg-secondary/50 cursor-pointer' to={'home'}>Kezdőlap</Link>
                <Link className='p-1 rounded hover:bg-secondary active:bg-secondary/50 cursor-pointer' to={'sponsors'}>Szponzoraim</Link>
                <Link className='p-1 rounded hover:bg-secondary active:bg-secondary/50 cursor-pointer' to={'gallery'}>Galéria</Link>
                <Link className='p-1 rounded hover:bg-secondary active:bg-secondary/50 cursor-pointer' to={'useful'}>Hasznos</Link>
                <Link className='p-1 rounded hover:bg-secondary active:bg-secondary/50 cursor-pointer' to={'contact'}>Kapcsolat</Link>
              </div>
            </div>
          )
          : (
            <div className='w-full bg-primary-bg flex flex-row items-center justify-between'>
              <div className='cursor-pointer'>
                <Link to={'home'}>
                  <img src={logo} alt="personal logo" className='h-16' />
                </Link>
              </div>
              <div className='mr-5 text-xl h-12 w-12 drop-shadow-md flex items-center justify-center bg-secondary rounded-full p-1 hover:bg-secondary/70 active:bg-secondary/50 cursor-pointer' onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}>
                {
                  !isMobileMenuToggled
                    ? (<SlOptionsVertical />)
                    : (<GrClose />)
                }
              </div>
            </div>
          )
      }
      {
        !isNonMobileScreens && isMobileMenuToggled && (
          <div className='w-full bg-primary-bg flex flex-col gap-3 items-center text-xl font-bold p-3 pt-5'>
            <Link className='p-1 rounded hover:bg-secondary active:bg-secondary/50' to={'home'}>Kezdőlap</Link>
            <Link className='p-1 rounded hover:bg-secondary active:bg-secondary/50' to={'sponsors'}>Szponzoraim</Link>
            <Link className='p-1 rounded hover:bg-secondary active:bg-secondary/50 cursor-pointer' to={'gallery'}>Galéria</Link>
            <Link className='p-1 rounded hover:bg-secondary active:bg-secondary/50' to={'useful'}>Hasznos</Link>
            <Link className='p-1 rounded hover:bg-secondary active:bg-secondary/50' to={'contact'}>Kapcsolat</Link>
          </div>
        )
      }

    </div>
  )
};

export default Navbar;
