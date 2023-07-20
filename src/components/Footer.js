import React from 'react';
import { FaCopyright } from 'react-icons/fa';
import { BsInstagram, BsFacebook, BsLinkedin } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='flex flex-col w-full bg-primary-bg p-3 items-center'>
      <div className='flex flex-row gap-5'>
        <a href='https://www.facebook.com/tibor.szucs.790' target='_blank' rel="noreferrer" className='text-xl h-12 w-12 drop-shadow-md flex items-center justify-center bg-secondary rounded-full p-1 hover:bg-secondary/70 active:bg-secondary/50 cursor-pointer'>
          <BsFacebook />
        </a>
        <a href='https://www.instagram.com/tibor.szucs.790' target='_blank' rel="noreferrer" className='text-xl h-12 w-12 drop-shadow-md flex items-center justify-center bg-secondary rounded-full p-1 hover:bg-secondary/70 active:bg-secondary/50 cursor-pointer'>
          <BsInstagram />
        </a>
        <a href='https://www.linkedin.com/in/tibor-sz%C5%B1cs-bb972b237/' target='_blank' rel="noreferrer" className='text-xl h-12 w-12 drop-shadow-md flex items-center justify-center bg-secondary rounded-full p-1 hover:bg-secondary/70 active:bg-secondary/50 cursor-pointer'>
          <BsLinkedin />
        </a>
      </div>
      <div className='w-full max-w-[800px] flex justify-between my-3 text-sm'>
        <Link className='cursor-pointer' to={'home'}>Kezdőlap</Link>
        <Link className='cursor-pointer' to={'sponsors'}>Szponzoraim</Link>
        <Link className='cursor-pointer' to={'gallery'}>Galéria</Link>
        <Link className='cursor-pointer' to={'useful'}>Hasznos</Link>
        <Link className='cursor-pointer' to={'contact'}>Kapcsolat</Link>
      </div>
      <div className='flex flex-row items-center'>
        <FaCopyright /> <span className='font-semibold text-sm ml-1 truncate'>2023 Szűcs Tibor | Minden jog fenntartva!</span>
      </div>
    </div>
  )
};

export default Footer;
