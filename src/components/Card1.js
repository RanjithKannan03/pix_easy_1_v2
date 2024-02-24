import React from 'react'

const Card1 = () => {
  return (
    <div className='flex flex-col items-start justify-center space-y-1'>
        <div className='h-[17rem] w-[17rem] rounded-lg overflow-hidden  flex flex-col bg-cover items-baseline justify-between bg-profile px-3 py-2'>
        <div className='flex items-center'>
        <div className='h-2 w-2 bg-white rounded full'></div>
            <h1 className='text-white text-sm font-light'> | Team</h1>
        </div>

        <div className='flex flex-col'>

        <h1 className='text-white text-xl'>Name</h1>
        <h1 className='text-white text-sm'>Members</h1>

        </div>
        </div>

        <div className='flex justify-start space-x-2 items-start'>

        <h1 className='text-gray-300 px-4 bg-gray-600 text-sm font-light rounded-full'>Tag1</h1>
        <h1 className='text-gray-300 px-4 bg-gray-600 text-sm font-light rounded-full'>Tag2</h1>

             
        </div>

    </div>
  )
}

export default Card1