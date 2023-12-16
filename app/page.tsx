/* import Footer from '@/component/footer';
import Link from 'next/link';
import React from 'react';

const HomePage = () => {

  return (
    <div  style={{
      backgroundImage: `url('/digital-5g.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '100%',
      height: '100vh',
    }}>
    <div className="z-0  min-h-screen"   >
      <header className=" shadow-md  ">
        <nav className="container mx-auto py-4">
          <ul className="flex  justify-center items-center space-x-6">
            <li>
              <a href="/about" className="text-blue-600 font-semibold  hover:underline">About</a>
            </li>
            <li>
              <a href="/contact" className="text-blue-600 font-semibold hover:underline">Contact</a>
            </li>          </ul>
        
        </nav>
      </header>
      <main className="container flex  flex-col mx-auto text-center  py-8 text-[#FFF4D1] ">
        <h1 className="text-3xl font-bold  mb-4">Welcome to Our 5G Coverage Map</h1>
        <p className="text-lg mb-6 ">Check out the 5G network coverage in your area:</p>
        <div className='flex justify-between  items-center  space-y-0 max-md:flex-col max-md:space-y-4 m-6'>
          <div>
        <Link className=" bg-black opacity-50 hover:opacity-80 text-[#FFF9E5] mx-auto font-semibold py-2 px-4  rounded-full flex items-center  border-r-2 border-t-4 border-[#FFF4D1] " href="/map" >
          Go to the Map
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-big-right-dash"><path d="M5 9v6"/><path d="M9 9h3V5l7 7-7 7v-4H9V9z"/></svg>
        </Link>
        </div>

<div >
        <div className="max-w-md mx-auto bg-black opacity-50 rounded-lg  shadow-md   ">
          <div className="p-6 ">
            <h2 className="text-2xl font-bold mb-4">Our 5G Coverage Status</h2>
            <p className=" mb-4">
              Our 5G coverage is rapidly growing, and soon it will be available throughout the entire country. 
              These are the estates and sites that are currently prepared for 5G:
            </p>
          
          </div>
        </div>
        </div>
        </div>

      </main>
   <Footer/>
      </div>
    </div>
  );
};

export default HomePage; */



"use client"
import dynamic from 'next/dynamic';
import React from 'react'
const Map = dynamic(() => import('./map/map'), {
    ssr: false,
  });

function page() {
    
  return (
    <div   className=' '>

<Map />

    </div>
  )
}

export default page