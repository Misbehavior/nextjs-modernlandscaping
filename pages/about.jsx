import React from 'react';
import Image from 'next/image';
import { MdKeyboardBackspace } from 'react-icons/md';
import Link from 'next/link';

import Pic1 from '../pages/Pictures/AboutPagePictures/pic1.jpg';

const About = () => {
  return (
    <div className="bg-lightGreen  h-[60rem] w-full">
      <div className="p-3 block hover:text-white w-0 flex justify-start hover:scale-125  transition-all duration-500 ">
        <Link href="/">
          <MdKeyboardBackspace alt="back arrow" size={40} />
        </Link>
      </div>
      <div className="">
        <div className=" flex justify-center xs:m-5">
          <Image
            className="image-circle shadow-2xl"
            src={Pic1}
            height={100}
            width={100}
          />
        </div>
        <div className="w-full  flex justify-center items-center align-middle py-5">
          <h1 className="text-xl font-semibold text-black font-Raleway">
            About Me
          </h1>
        </div>

        <div className="flex justify-center items-center ">
          <div className="w-[37rem] bg-white rounded-xl shadow-2xl py-5 px-7 customXSM:m-5 relative">
            <div className="text-5xl font-Catamaran absolute w-full h-full left-4 top-4">
              "
            </div>
            <p className=" text-xl italic py-1 tracking-wide">
              Founder & CEO of Modern Landscaping LLC. I have had the pleasure
              and experience of servicing commercial names big and small as well
              as residential homes for over 40 plus years. Looking to turn your
              landscape ideas into reality!
              <span className="text-5xl font-Catamaran absolute">"</span>
            </p>

            <p className="w-full flex justify-end font-Raleway font-bold customXSM:mt-5">
              {' '}
              -David M. Story
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
