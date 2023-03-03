import React from 'react';
import Image from 'next/image';
import Pic1 from '../Pictures/ServicesPictures/pic1.jpg';
import Pic2 from '../Pictures/ServicesPictures/pic2.jpg';
import Pic3 from '../Pictures/ServicesPictures/pic3.jpg';
import next from 'next';

const Services = () => {
  return (
    <section id="services" className="bg-gray py-20 ">
      <h1
        className="flex justify-center align-middle font-Raleway font-extrabold text-4xl
        w-full"
      >
        What We Offer
      </h1>
      <div
        className="mt-14 
 bg-slate-50 shadow-2xl py-12 rounded-md min-h-min max-w-full ml-10 mr-10  m-auto gap-15 "
      >
        <div className="flex justify-center align-middle flex-wrap  m-auto gap-16  ml-8 mr-8 mb-8">
          <div className=" h-96 w-96 bg-slate-50 shadow-xl">
            <h1 className="font-sans font-bold w-full  flex justify-center align-middle text-lg rounded-md ">
              {' '}
              Gardening & Nursery
            </h1>
            <Image
              alt="gardening and nursery landscape design"
              className="object-cover h-full w-full overflow-hidden rounded-md"
              height={0}
              width={0}
              src={Pic2}
            />
          </div>
          <div className=" h-96 w-96 shadow-xl bg-slate-50">
            <h1 className=" font-sans font-bold w-full flex justify-center align-middle text-lg rounded-md">
              Lawn Care & Maintenance
            </h1>
            <Image
              alt="lawn care and maintenance landscape design"
              className="object-cover h-full w-full overflow-hidden rounded-md "
              height={0}
              width={0}
              src={Pic1}
            />
          </div>
          <div className=" h-96 w-96 shadow-xl  bg-slate-50">
            <h1 className=" font-sans font-bold w-full flex justify-center align-middle text-lg rounded-md">
              Masonry & Rock Work
            </h1>
            <Image
              alt="masonry and rock work landscape design"
              className="object-cover h-full w-full overflow-hidden rounded-md "
              height={0}
              width={0}
              src={Pic3}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
