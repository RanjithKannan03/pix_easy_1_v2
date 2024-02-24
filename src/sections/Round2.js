import React from 'react'
import { Carousel } from 'flowbite-react';
import Cards1 from '../components/Cards1';
import Navbar from '../components/NavBar';
import RandomSection from '../components/RandomSection';
import Jai from '../components/Jai';

const Round2 = () => {
  return (
        <div className='flex flex-col overflow-hidden space-y-4 bg-[#1A1A1A]'>

    <Navbar/>

    <div className="h-[700px] bg-black w-screen flex justify-center items-center">


    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/L5PVwCY1EN8?autoplay=1&showinfo=0&controls=0" frameborder="0"></iframe>

    </div>

    <Jai/>


    

    <div className='flex flex-col overflow-x-scroll cards justify-start items-start space-y-2 text-left px-4 pt-6 pb-2'>
    <h1 className='text-white text-xl font-semibold sticky top-0 left-0'>Watch Now</h1>
    <Cards1/>

    </div>

    <div className='flex flex-col overflow-x-scroll cards justify-start items-start space-y-2 text-left px-4 pt-6 pb-2'>
    <h1 className='text-white text-xl font-semibold sticky top-0 left-0'>Live From The Club</h1>
    <Cards1/>

    </div>

    <div className='flex flex-col overflow-x-scroll cards justify-start items-start space-y-2 text-left px-4 pt-6 pb-2'>
    <h1 className='text-white text-xl font-semibold sticky top-0 left-0'>Latest Album Release</h1>
    <Cards1/>

    </div>

    <RandomSection/>

    <div className='flex flex-col overflow-x-scroll cards justify-start items-start space-y-2 text-left px-4 pt-6 pb-2'>
    <h1 className='text-white text-xl font-semibold sticky top-0 left-0'>Radio Highlights</h1>
    <Cards1/>

    </div>

    <div className='flex flex-col overflow-x-scroll cards justify-start items-start space-y-2 text-left px-4 pt-6 pb-2'>
    <h1 className='text-white text-xl font-semibold sticky top-0 left-0'>Listen Live From The Club</h1>
    <Cards1/>

    </div>

    <div className='flex flex-col overflow-x-scroll cards justify-start items-start space-y-2 text-left px-4 pt-6 pb-2'>
    <h1 className='text-white text-xl font-semibold sticky top-0 left-0'>From The Vault</h1>
    <Cards1/>

    </div>
    

    </div>
  )
}

export default Round2