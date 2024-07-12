import React from 'react'

export default function Main() {
  return (
    <div>
      <div className="bg-cover bg-center h-screen">
        <div className=' px-32 grid grid-cols-2 h-screen'>

          <div className=' mt-[40%] w-full h-[343px] text-white'>
            <h2 className='text-[30px] mb-0 uppercase'>So, you want to travel to</h2>
            <h1 className='text-[150px] mt-0 pt-0'>SPACE</h1>
            <p className='text-[17px]'>Let’s face it; if you want to go to space, you might as well genuinely go to
              outer space and not hover kind of on the edge of it. Well sit back, and relax
              because we’ll give you a truly out of this world experience!</p>
          </div>

          <div className='mt-[40%] w-full h-[343px] grid grid-cols-2 items-center'>
            <div></div>
            <div className='bg-white rounded-full h-[272px] w-[272px] flex items-center justify-center'>
              <p className='text-[37px]'>Explore</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
