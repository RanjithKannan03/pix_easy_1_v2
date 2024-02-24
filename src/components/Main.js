import React from 'react'

const Main = () => {
  return (
          <div className="h-full w-full bg-white flex flex-col items-center text-black mt-5">
            <div className="h-full w-full flex flex-col text-black font-poppins justify-center  ">
              <div className=" flex w-full justify-center text-9xl">THE FESTIVAL</div>
              <div className=" flex w-full justify-center mx-5 text-9xl">
                OF URGENT
              </div>
              <div className=" flex w-full justify-center text-9xl">REINVENTIONS</div>
      
              <div className="w-full flex flex-row justify-center mt-10 space-x-36">
                <div className="flex flex-col justify-center">
                  <div className="w-full flex text-center justify-center text-xs">
                    WHEN
                  </div>
                  <div className="mt-5  text-2xl font-normal">Feb 3-4 , 2022</div>
                </div>
                <div className="flex flex-col">
                  <div className="w-full flex text-center justify-center text-xs">
                    MISSED THE FESTIVAL?
                  </div>
                  <div className="mt-5 underline text-2xl font-normal">Watch Event</div>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        
  )
}

export default Main