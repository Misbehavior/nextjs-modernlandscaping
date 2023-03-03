import React from 'react';
import { IoMdMail } from 'react-icons/io';
import { FaPhoneAlt } from 'react-icons/fa';
import { ImLocation2 } from 'react-icons/im';

const Contact = () => {
  return (
    <div id="contact" className="py-24 bg-gray ">
      <h1 className="text-4xl font-Raleway font-extrabold w-full flex justify-center items-center ">
        Get In Contact
      </h1>
      <div className=" bg-slate-50 flex shadow-2xl rounded-md m-5 mt-10 py-16 justify-center items-center px-5">
        <div className="flex flex-col md:flex-row md:space-x- md:space-y-0 space-y-6  lg:flex-row lg:space-x-6 lg:space-y-0 space-y-6 md:p-12 lg:p-12 bg-green-500 w-full max-w-4xl p-8 rounded-xl shadow-2xl text-white overflow-hidden md:mr-3 md:ml-3 lg:mr-3 lg:ml-3 sm:mr-3 sm:ml-3 xs:mr-3 xs:ml-3 ">
          <div className="flex flex-col space-y-8 justify-between ">
            <div>
              <h1 className="font-bold text-4xl tracking-wide">Contact Us</h1>
              <p className="pt-2 text-white text-sm">
                Get in touch with us! For all your questions or concerns, please
                feel free to reach out to us. We will be in touch with you as
                soon as possible. Thank You! <br /> <br />
                <span className="font-semibold">
                  24/7 365 Customer Support!
                </span>
              </p>
            </div>
            <div className="flex flex-col space-y-6">
              <div className="inline-flex space-x-2 items-center">
                <FaPhoneAlt />
                <span> +1 (828) 310 6463</span>
              </div>
              <div className="inline-flex space-x-2 items-center break-words">
                <div className="block">
                  <IoMdMail />
                </div>
                <span className="w-full block pr-6">
                  contact@modernlandscaping.com
                </span>
              </div>
              <div className="inline-flex space-x-2 items-center">
                <ImLocation2 />
                <span>Valdese Area, NC 28690</span>
              </div>
            </div>
            <div className="flex space-x-4 text-lg">
              <a href="https://www.facebook.com">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
              <a href="https://www.instagram.com">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </div>
          </div>
          <div className="relative">
            <div className=" z-10 bg-white rounded-xl shadow-2xl p-8 text-black md:w-80 lg:w-80">
              <form action="" className="flex flex-col space-y-4">
                <div>
                  <label for="" className="text-sm">
                    Your name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-black"
                  />
                </div>

                <div>
                  <label for="" className="text-sm">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="Email Address"
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
                <div>
                  <label for="" className="text-sm">
                    Message
                  </label>

                  <textarea
                    type="message"
                    placeholder="Message"
                    rows="4"
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
                <button className="inline-block self-end bg-green-500 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></script>
    </div>
  );
};

export default Contact;
