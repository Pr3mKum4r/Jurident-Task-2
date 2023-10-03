

import React from 'react';

function Twobox() {
  return (
    <div className="relative bottom-20 pt-16 md:ml-20 md:mt-0 ml-4 mt-8 md:mr-20 mr-4">
      <h1 className="relative">
        {' '}
        <h1 className="text-3xl font-semibold text-#22495F"> Our Events</h1>{' '}
        <span className="absolute ml-48 h-0.5 w-4/5 left-0 bottom-2 bg-[#22495F]"></span>
      </h1>
      <div className="flex flex-col md:flex-row gap-14 mt-10">
        <div className="flex bg-[#E7F2F7] w-full md:w-45 p-5 rounded-lg">
          <div className="text-center pr-5 ml-5 text-[#374151]">
            <h1 className="text-5xl font-semibold ">13</h1>
            <h1 className="text-xs mt-1 font-medium ">APR</h1>
          </div>
          <div className="text-[#22495F]">
            <h1 className="text-xs ">NEXT EVENTS</h1>
            <h1 className="font-semibold text-2xl ">
              A day with our wonderful <br /> children
            </h1>
          </div>
          <div>
            <button className="bg-white p-2 rounded-full relative left-20 top-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex bg-[#E7F2F7] w-full md:w-45 p-6 rounded-lg">
          <div className="text-center pr-5 ml-4 text-[#374151]">
            <h1 className="text-5xl font-semibold">25</h1>
            <h1 className="text-xs mt-1 font-medium ">APR</h1>
          </div>
          <div className="text-[#22495F]">
            <h1 className="text-xs ">NEXT EVENTS</h1>
            <h1 className="font-semibold text-2xl">
              Seminar: Caring for children <br /> with autism
            </h1>
          </div>
          <div>
            <button className="bg-white p-2 rounded-full relative left-20 top-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Twobox;
