import React from 'react'

const Footer = () => {
  return (
    <div className='w-full  mt-4 pt-4 bg-black'>
        <div className="w-full" style={{ borderTop: '1px solid black'}}></div>
      <div className='flex bg-black w-full h-30 justify-center'>
        <div className='flex text-white text-xs py-10'>PRESENTED BY:</div>
        <img alt='img2' src='assets/endbs.jpg' className="w-fit h-56 "/>
      </div>
    </div>
  )
}

export default Footer