import React from 'react'

const RandomSection = () => {
  return (
    <div className='w-screen h-[30rem] bg-random bg-cover overflow-hidden flex pt-20 justify-start items-center px-10'>
    <div className='flex flex-col justify-evenly items-start text-right space-y-2'>
    <div className='flex justify-start space-x-2 items-start'>

        <h1 className='text-gray-300 px-4 bg-gray-600 text-sm font-light rounded-full'>Tag1</h1>
        <h1 className='text-gray-300 px-4 bg-gray-600 text-sm font-light rounded-full'>Tag2</h1>

             
        </div>

    <h1 className='font-bold font-poppins text-white text-4xl'>
    Name
    </h1>
    <h1 className='font-normal text-sm text-white mt-2'>
        Description
    </h1>
    <h1 className='text-gray-300 px-4 bg-gray-600 text-sm font-light rounded-full'>More</h1>
    </div>
    </div>
  )
}

export default RandomSection