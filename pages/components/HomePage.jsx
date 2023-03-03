import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-fixed bg-center bg-cover background-img">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[1]" />
      <div className="p-5 text-white z-[2] ">
        <h2 className="text-5xl font-bold">
          Over 40 Years of <span className="text-green-500">Excellence</span>
        </h2>
        <p className="font-sans py-5 text-xl">
          Creativity. Quality. Experience.
        </p>
        <button className="px-8 py-2 border font-sans">
          <Link href="#contact">Get a Quote</Link>
        </button>
      </div>
    </div>
  );
};

export default HomePage;
