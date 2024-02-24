import React from 'react'
import { Carousel } from 'flowbite-react';
import Cards1 from '../components/Cards1';
import Navbar from '../components/NavBar';

const Round2 = () => {
  return (
    <div className='flex flex-col'>

    <Navbar/>

    <div className="h-auto bg-black w-screen flex justify-center items-center">


    <iframe width="750px" height="550px" src="https://www.youtube.com/embed/L5PVwCY1EN8?autoplay=1&showinfo=0&controls=0" frameborder="0"></iframe>

    </div>


    

    <Cards1/>

    </div>
  )
}

export default Round2