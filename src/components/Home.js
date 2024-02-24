import React from 'react';
import Schedule from './Schedule';
import Footer from './Footer';
import Main from './Main';



const Home = (props) => {
  return (
    <div className="w-full flex overflow-hidden min-h-screen items-center flex-col bg-gradient-to-b from-white via-transparent to-[#c4ff48]">
      <div className="flex w-full justify-center">
        <div className="flex flex-col w-52 items-start">
        <div className='flex space-x-4 items-center'>
        <span>February 3-4, 2022</span>
        <div className='w-4 h-4 rounded-full bg-[#c4ff48]'></div>
        </div>

        <div className='flex space-x-4 items-center'>
        <span>February 3-4, 2022</span>
        <div className='w-4 h-4 rounded-full bg-[#c4ff48]'></div>
        </div>
          
        </div>
        <div className="flex flex-col w-52 items-start">

        <div className='flex space-x-4 items-center'>
        <span>Online and Anywhere</span>
        <div className='w-4 h-4 rounded-full bg-[#c4ff48]'></div>
        </div>
          
        <div className='flex space-x-4 items-center'>
        <span>Online and Anywhere</span>
        <div className='w-4 h-4 rounded-full bg-[#c4ff48]'></div>
        </div>
        </div>
        <div className="flex flex-col w-52 items-start">
        <div className='flex space-x-4 items-center'>
        <span>February 3-4, 2022</span>
        <div className='w-4 h-4 rounded-full bg-[#c4ff48]'></div>
        </div>
          <div className='flex space-x-4 items-center'>
        <span>February 3-4, 2022</span>
        <div className='w-4 h-4 rounded-full bg-[#c4ff48]'></div>
        </div>
        </div>
        <div className="flex flex-col w-52 items-start">
        <div className='flex space-x-4 items-center'>
        <span>Online and Anywhere</span>
        <div className='w-4 h-4 rounded-full bg-[#c4ff48]'></div>
        </div>
        <div className='flex space-x-4 items-center'>
        <span>Online and Anywhere</span>
        <div className='w-4 h-4 rounded-full bg-[#c4ff48]'></div>
        </div>
        </div>
        <div className="flex flex-col w-52 items-start">
        <div className='flex space-x-4 items-center'>
        <span>February 3-4, 2022</span>
        <div className='w-4 h-4 rounded-full bg-[#c4ff48]'></div>
        </div>
        </div>
        <div className="flex flex-col w-52 items-start">
        <div className='flex space-x-4 items-center'>
        <span>Online and Anywhere</span>
        <div className='w-4 h-4 rounded-full bg-[#c4ff48]'></div>
        </div>
        </div>
        <div className="flex flex-col w-52 items-start">
        <div className='flex space-x-4 items-center'>
        <span>February 3-4, 2022</span>
        <div className='w-4 h-4 rounded-full bg-[#c4ff48]'></div>
        </div>
        </div>
        <div className="flex flex-col w-52 items-start">
        <div className='flex space-x-4 items-center'>
        <span>Online and Anywhere</span>
        <div className='w-4 h-4 rounded-full bg-[#c4ff48]'></div>
        </div>
        </div>
      </div>
      <div className="w-full" style={{ borderTop: '1px solid black'}}></div>
      <div className="flex w-full h-20 items-center justify-between px-80">
        <div className='flex items-center space-x-3'>
        <button className="rounded-full h-8 w-32 border-black border-solid border-2 bg-transparent">The Lineup</button>
        <button className="rounded-full h-8 w-32 bg-transparent border-solid border-2 border-black">About</button>
        <button className="rounded-full h-8 w-32 bg-transparent border-solid border-2 border-black">Briefs</button>
        <button className="rounded-full h-8 w-32 bg-transparent border-solid border-2 border-black">Schedule</button>
        <button className="rounded-full h-8 w-32 bg-transparent border-solid border-2 border-black">Winners</button>
        </div>
        <img alt="img1" src='/assets/logo1.png' />
        
      </div>
      <div className="w-full" style={{ borderTop: '1px solid black'}}></div>



    <Main/>

      <Schedule/>
      <Footer/>

    </div>
  );
};

export default Home;