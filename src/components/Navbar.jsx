import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const buttonRotate = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNavbar(currentScrollY < lastScrollY || currentScrollY < 10);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    // <div className='px-2 fixed z-10 py-2 md:px-6 md:py-4 bg-black w-full flex justify-between items-center'>
    <div className={`px-2 fixed top-0 left-0 z-10 py-2 md:px-6 md:py-4 bg-black w-full flex justify-between items-center transition-transform duration-300 ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}>

      <div className='flex items-center gap-12 text-white'>
        <img className='h-10 md:h-14 xl:16 2xl:h-16' src={assets.app_icon} alt="" />
        <a className='hidden md:inline-block md:text-xl 2xl:text-2xl font-medium' href="#product">Product</a>
        <a className='hidden md:inline-block md:text-xl 2xl:text-2xl font-medium' href="#about">About</a>
        <a className='hidden md:inline-block md:text-xl 2xl:text-2xl font-medium' href="#slider">Careers</a>
      </div>

      <div className='flex gap-2'>
        <button className='px-6 md:px-9 py-2 md:py-3 font-medium text-sm md:text-xl 2xl:text-2xl bg-[#FFEF46] rounded-full'>
          Download now
        </button>

        {/* Hamburger Menu */}
        <div
          onClick={buttonRotate}
          className='h-10 w-10 z-10 rounded-full bg-gray-800 flex justify-center items-center flex-col gap-1.5 md:hidden cursor-pointer'
        >
          <div
            className={`
              w-4 h-[2px] bg-white transition-transform duration-300
              ${menuOpen ? 'rotate-45 translate-y-[4px]' : ''}
            `}
          ></div>
          <div
            className={`
              w-4 h-[2px] bg-white transition-transform duration-300
              ${menuOpen ? '-rotate-45 -translate-y-[4px]' : ''}
            `}
          ></div>
        </div>
        {menuOpen ?
          <div className='md:h-[93%] min-h-screen top-14 w-full flex flex-col px-8 py-18 gap-4 bg-black text-white absolute left-0 z-20 md:hidden'>
            <a
              href="#product"
              onClick={() => setMenuOpen(false)}
              className='text-3xl font-semibold'
            >
              Product
            </a>
            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className='text-3xl font-semibold'
            >
              About
            </a>
            <a
              href="#careers"
              onClick={() => setMenuOpen(false)}
              className='text-3xl font-semibold'
            >
              Careers
            </a>
          </div> : ''
        }


      </div>
    </div>
  );
}

export default Navbar;
