import React from 'react';
import Link from 'next/link';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { SiFacebook } from 'react-icons/si';
import { RiInstagramFill } from 'react-icons/ri';

const Footer = () => {
  return (
    <div className="bg-gray h-28  flex justify-start items-center w-full font-Mulish">
      <div className="grid justify-items-start	 place-items-center w-full ml-10">
        <h1 className="font-bold font-sans text-xl">
          <Link href="/">Modern Landscaping</Link>
        </h1>
      </div>
      <div className="grid grid-cols-1 justify-items-center	place-items-center w-full  customMD:hidden">
        <h1 className="font-sans">
          ©2023 Modern Landscaping LLC. All Rights reserved.
        </h1>
      </div>
      <ul className="grid grid-cols-4 justify-items-end place-items-center w-full mr-10">
        <li>
          <Link href="#contact">
            <FaPhoneAlt />
          </Link>
        </li>
        <li>
          <Link href="#contact">
            <IoMdMail />
          </Link>
        </li>
        <a href="https://www.facebook.com">
          <SiFacebook />
        </a>
        <li>
          <a href="https://www.instagram.com">
            <RiInstagramFill />
          </a>
        </li>
      </ul>
      <script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></script>
    </div>
  );
};

export default Footer;
