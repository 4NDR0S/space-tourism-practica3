import React from 'react'
import Header from '../Home/Header'
import { Link, Outlet, useLocation } from 'react-router-dom'

export default function Technology() {

  const location = useLocation();

  const isActive = (path) => {
    return location.pathname.includes(path)
  }

  return (
    <div className="bg-cover bg-center min-h-screen" style={{ backgroundImage: "url('public/assets/technology/background-technology-desktop.jpg')" }}>
      <Header />

      <div className='flex justify-center py-10'>
        <div className='max-w-[1500px]'>
          <h2 className='text-white text-[34px] uppercase'> <span className='text-[#979797]'>02 </span>Meet your crew</h2>
          <div className=' pt-24'>
            <Outlet />

            <div>
            <nav>
              <ul className='flex text-white text-[19px] uppercase gap-10 pl-[5%] pt-10'>
                <li className={`h-[80px] w-[80px] flex items-center justify-center text-white border-2 border-white rounded-full text-[37px] ${isActive('launch') ? 'bg-white text-black' : ''}`}>
                  <Link to="launch">1</Link>
                </li>
                <li className={`h-[80px] w-[80px] flex items-center justify-center text-white border-2 border-white rounded-full text-[37px] ${isActive('spaceport') ? 'bg-white text-black' : ''}`}>
                  <Link to="spaceport">2</Link>
                </li>
                <li className={`h-[80px] w-[80px] flex items-center justify-center text-white border-2 border-white rounded-full text-[37px] ${isActive('capsule') ? 'bg-white text-black' : ''}`}>
                  <Link to="capsule">3</Link>
                </li>
              </ul>
            </nav>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
