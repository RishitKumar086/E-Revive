import React from 'react'
import { Footer } from '../components/Footer';
import Navbar from '../components/Navbar';

export const About = () => {
  return (
    <>
    <Navbar/>
    <h1 className=' text-center text-5xl font-bold pt-8 font-mono z-10'>About</h1>
    <hr className='bg-green-600 h-2 w-[18%] mx-auto relative -z-10 top-[-12px]'/>
    <section className='[1080px]'>
    <div className="p-8">
  <div className="flex felx-col items-center justify-center">
    <span
      className="rounded-full bg-indigo-500 px-2 py-1 text-white uppercase text-sm"
    >
      Insight
    </span>
  </div>
  <h1 className="text-4xl font-medium text-gray-700 text-center mt-6">
    E-Revive
  </h1>
  <p className="text-center mt-6 text-lg font-light text-gray-500">
  In the world of e-waste, knowledge is our beacon, guiding us toward a brighter, more sustainable future.".
  </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3">
  <div className="p-8">
    <div
      className="bg-indigo-100 rounded-full w-16 h-16 flex justify-center items-center text-indigo-500 shadow-2xl"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
    <h2 className="uppercase mt-6 text-indigo-500 font-medium mb-3">
      Vision & Mission
    </h2>
    <p className="font-light text-sm text-gray-500 mb-3">
    E-Revive: Pioneering a greener tomorrow through responsible e-waste management.
    Our mission is to provide a convenient and eco-friendly platform for individuals and businesses to recycle their electronics, reducing the global e-waste problem.
    </p>
    <a className="text-indigo-500 flex items-center hover:text-indigo-600" href="/">
      More about us 
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clip-rule="evenodd"
        />
      </svg>
    </a>
  </div>

  <div className="p-8">
    <div
      className="bg-green-100 rounded-full w-16 h-16 flex justify-center items-center text-green-500 shadow-2xl"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
    <h2 className="uppercase mt-6 text-green-500 font-medium mb-3">
     About E-Revive
    </h2>
    <p className="font-light text-sm text-gray-500 mb-3">
    "At e-Revive, we're on a mission to revolutionize the way we handle electronic waste."
    "Our project is fueled by a passion for sustainability and a commitment to making a positive impact."
    </p>
    <a className="text-green-500 flex items-center hover:text-green-600" href="/">
      More about us 
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clip-rule="evenodd"
        />
      </svg>
    </a>
  </div>
  <div className="p-8">
    <div
      className="bg-red-100 rounded-full w-16 h-16 flex justify-center items-center text-red-500 shadow-2xl">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
    <h2 className="uppercase mt-6 text-red-500 font-medium mb-3">
      Why E-Revive
    </h2>
    <p className="font-light text-sm text-gray-500 mb-3">
    e-Revive was born out of a deep concern for the environment. We believe in the urgent need to address the growing e-waste problem to protect our planet from the harmful effects of improper electronic disposal.
    The world is facing an e-waste crisis. With millions of tons of electronic devices discarded each year, our mission is to be part of the solution rather than the problem
    </p>
    <a className="text-red-500 flex items-center hover:text-red-600" href="/">
      More about us 
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clip-rule="evenodd"
        />
      </svg>
    </a>
  </div>
</div>
    </section>
    <Footer/>
    </>
  );
};
export default About
