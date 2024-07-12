import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import Header from '../Home/Header'

export default function Destination() {

    const location = useLocation();

    const isActive = (path) => {
        return location.pathname.includes(path)
    }

    return (
        <div className="bg-cover bg-center min-h-screen" style={{ backgroundImage: "url('/assets/destination/background-destination-desktop.jpg')" }}>
            <Header />
            <div className='flex justify-center py-10'>
                <div className='max-w-[1500px]'>
                    <h2 className='text-white text-[34px] uppercase'> <span className='text-[#979797]'>01</span> Pick your destination</h2>
                    <div className=' pt-24'>
                        <div>
                            <nav>
                                <ul className='flex text-white text-[19px] uppercase gap-10 justify-end pr-[15%]'>
                                    <li className={`${isActive('moon') ? 'border-b-4  border-white' : ''}`}>
                                        <Link to="moon">Moon</Link>
                                    </li>
                                    <li className={`${isActive('mars') ? 'border-b-4  border-white' : ''}`}>
                                        <Link to="mars">Mars</Link>
                                    </li>
                                    <li className={`${isActive('europa') ? 'border-b-4 border-white' : ''}`}>
                                        <Link to="europa">Europa</Link>
                                    </li>
                                    <li className={`${isActive('titan') ? 'border-b-4  border-white' : ''}`}>
                                        <Link to="titan">Titan</Link>
                                    </li>
                                </ul>
                            </nav>
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
