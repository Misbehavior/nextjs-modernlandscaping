import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');

  const handleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('#EBECEF');
        setTextColor('#000000');
      } else {
        setColor('transparent');
        setTextColor('#FFFFFF');
      }
    };
    window.addEventListener('scroll', changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white break-normal font-Mulish">
        <Link href="/">
          <h1
            style={{ color: `${textColor}` }}
            className="font-bold text-4xl font-sans"
          >
            Modern Landscaping
          </h1>
        </Link>
        <ul
          style={{ color: `${textColor}` }}
          className="hidden lg:flex md:flex customSM:flex xl:flex"
        >
          <li className="p-4 font-semibold font-sans">
            <Link href="#services">Services</Link>
          </li>
          <li className="p-4 font-semibold font-sans">
            <Link href="#projects">Projects</Link>
          </li>
          <li className="p-4 font-semibold font-sans">
            <Link href="/about">About</Link>
          </li>
          <li className="p-4 font-semibold font-sans ">
            <Link
              className="border p-2 px-5 rounded-tr-lg
              rounded-bl-lg text-green-500
                
              "
              href="#contact"
            >
              <span style={{ color: `${textColor}` }}>Contact</span>
            </Link>
          </li>
        </ul>
        <div onClick={handleNav} className="block customSM:hidden  z-10 px-2">
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>
        <div
          className={
            nav
              ? ' absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black ease-in duration-300 text-center'
              : 'customSM::hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black ease-in duration-300 text-center'
          }
        >
          <ul>
            <li className="p-4 font-bold text-4xl hover:text-white font-sans">
              <Link onClick={closeNav} href="#services">
                Services
              </Link>
            </li>
            <li className="p-4 font-bold text-4xl hover:text-white font-sans">
              <Link onClick={closeNav} href="#projects">
                Projects
              </Link>
            </li>
            <li className="p-4 font-bold text-4xl hover:text-white font-sans">
              <Link onClick={closeNav} href="/about">
                About
              </Link>
            </li>
            <li className="p-4 font-bold text-4xl hover:text-white font-sans">
              <Link onClick={closeNav} href="#contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
