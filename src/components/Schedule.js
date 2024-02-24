import React from 'react'
import { useState } from 'react';

const Schedule = () => {

  const [selected,setSelected]=useState("Day1");

  return (
    <div className='w-full space-y-40 mt-8 pt-4 px-80 flex-col flex justify-center'>

    <div className='w-full flex border-black rounded-full border-2 border-solid'>

    <div onClick={()=>{setSelected("Day1")}} className={selected==="Day1"?"bg-black rounded-full w-[50%] text-white flex justify-between items-center py-2 px-8":"bg-transparent w-[50%] rounded-full text-black flex justify-between items-center py-2 px-8"}>
    <h1 className={selected==="Day1"?"border-white border-b-2 text-xl":" "}>
      Day One
    </h1>

    <h1 className='uppercase text-sm font-light'>
      THU,feb 2
    </h1>

    </div>

    <div onClick={()=>{setSelected("Day2")}} className={selected==="Day2"?"bg-black rounded-full text-white w-[50%] flex justify-between items-center py-2 px-8":"bg-transparent w-[50%] rounded-full text-black flex justify-between items-center py-2 px-8"}>
    <h1 className={selected==="Day2"?"border-white border-b-2 text-xl":" "}>
      Day Two
    </h1>

    <h1 className='uppercase text-sm font-light'>
      Fri,feb 3
    </h1>

    </div>

    </div>

    {/* <div className='flex w-full h-30 flex-col justify-center items-center'>

    <div className='flex w-full justify-between items-center px-4 pb-10'>

    <h1 className=' text-black font-light text-sm'>9:05a - 9:10a PST</h1>

    <div className='flex flex-col items-center justify-center'>

    </div>

    </div>

    </div> */}


    <div className='w-full flex border-black rounded-full border-2 border-solid'>

    <div onClick={()=>{setSelected("Day1")}} className={selected==="Day1"?"bg-black rounded-full w-[50%] text-white flex justify-between items-center py-2 px-8":"bg-transparent w-[50%] rounded-full text-black flex justify-between items-center py-2 px-8"}>
    <h1 className={selected==="Day1"?"border-white border-b-2 text-xl":" "}>
      Day One
    </h1>

    <h1 className='uppercase text-sm font-light'>
      THU,feb 2
    </h1>

    </div>

    <div onClick={()=>{setSelected("Day2")}} className={selected==="Day2"?"bg-black rounded-full text-white w-[50%] flex justify-between items-center py-2 px-8":"bg-transparent w-[50%] rounded-full text-black flex justify-between items-center py-2 px-8"}>
    <h1 className={selected==="Day2"?"border-white border-b-2 text-xl":" "}>
      Day Two
    </h1>

    <h1 className='uppercase text-sm font-light'>
      Fri,feb 3
    </h1>

    </div>

    </div>

    </div>
  )
}

export default Schedule