import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import Image from 'next/image';
import Pic1 from '../Pictures/ProjectsPictures/pic1.jpg';
import Pic2 from '../Pictures/ProjectsPictures/pic2.jpg';
import Pic3 from '../Pictures/ProjectsPictures/pic3.jpg';
import Pic4 from '../Pictures/ProjectsPictures/pic4.jpg';
import Pic5 from '../Pictures/ProjectsPictures/pic5.jpg';

const Portfolio = () => {
  const slides = [
    {
      url: 'https://images.unsplash.com/photo-1676053923757-9bbd80b47264?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
    },
    {
      url: 'https://images.unsplash.com/photo-1675871247154-63f4e248400f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
    },
    {
      url: 'https://images.unsplash.com/photo-1676218075021-d4f737b231d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMjB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const gotToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <section id="projects" className="py-24 bg-gray ">
      <h1 className="flex justify-center align-middle font-Raleway font-extrabold text-4xl">
        View Our Work
      </h1>
      <div className=" box-border m-10 ">
        <div className=" m-auto  max-w-max grid grid-cols-3 grid-flow-row-dense gap-5 xs:grid-cols-1 ">
          <div className="col-span-2 xs:col-span-1">
            <Image
              alt="backyard patio landscape design"
              className="h-full w-full object-cover rounded-md shadow-xl hover:opacity-60 ease-in-out duration-500 "
              src={Pic1}
            />
          </div>
          <div className="">
            <Image
              alt="rock fireplace landscape design"
              className="h-full w-full object-cover rounded-md shadow-xl hover:opacity-60 ease-in-out duration-500"
              src={Pic2}
            />
          </div>
          <div className="">
            <Image
              alt="rock steps backyard landscape design"
              className="h-full w-full object-cover rounded-md shadow-xl hover:opacity-60 ease-in-out duration-500"
              src={Pic3}
            />
          </div>
          <div className="">
            <Image
              alt="green grass flower rock walk way"
              className="h-full w-full object-cover rounded-md shadow-xl hover:opacity-60 ease-in-out duration-500"
              src={Pic4}
            />
          </div>
          <div className="">
            <Image
              alt="flowers and shrubs front of house landscape design"
              className="h-full w-full object-cover rounded-md shadow-xl hover:opacity-60 ease-in-out duration-500"
              src={Pic5}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
