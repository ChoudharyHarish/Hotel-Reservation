import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

import LogoDark from "../assets/img/logo-dark.svg"
import LogoWhite from "../assets/img/logo-white.svg"

const Header = () => {
  const [header, setHeader] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    })
  })
  return (
    <header
      className={`${header ? 'bg-white py-6 shadow-lg' : ' bg-transparent py-8'} fixed top-0 transition-all duration-300 z-50 w-full`}
    >
      <div className="container mx-auto flex flex-col items-center gap-y-6 lg:flex-row lg:justify-between">
        <a href="/">{header ? <img src={LogoDark} alt="DarkLogo" className='w-[160px]' /> :
          <img src={LogoWhite} className='w-[160px]' alt="Ligh Logo" />}</a>
        <nav className={`${header ? 'text-primary' : 'text-white'} flex gap-x-4 lg:gap-x-8 tracking-[2px]text-[14px] items-center uppercase font-tertiary`}>
          <a href="/" className="hover:text-accent transition">Home</a>
          <a href="/" className="hover:text-accent transition">Rooms</a>
          <a href="/" className="hover:text-accent transition">Restaurant</a>
          <a href="/" className="hover:text-accent transition">Contact</a>
          <a href="/" className="hover:text-accent transition">Contact</a>
        </nav>
      </div>
    </header>
  )
}

export default Header;
