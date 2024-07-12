import React from 'react'
import Header from '../Home/Header'
import { Link, Outlet, useLocation } from 'react-router-dom'

export default function Crew() {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname.includes(path)
    }

    return (
        <div className="bg-cover bg-center min-h-screen" style={{ backgroundImage: "url('/assets/crew/background-crew-desktop.jpg')" }}>
            <Header />

            <div className='flex justify-center py-10'>
                <div className='max-w-[1500px]'>
                    <h2 className='text-white text-[34px] uppercase'> <span className='text-[#979797]'>02</span> Meet your crew</h2>
                    <div className=' pt-24'>
                        <Outlet />

                        <div>
                            <nav>
                                <ul className='flex text-[#979797] text-[19px] uppercase gap-10 pl-[5%] pt-10'>
                                    <li className={`${isActive('douglas') ? 'text-white' : ''}`}>
                                        <Link to="douglas">D</Link>
                                    </li>

                                    <li className={`${isActive('mark') ? 'text-white' : ''}`}>
                                        <Link to="mark">M</Link>
                                    </li>

                                    <li className={`${isActive('victor') ? 'text-white' : ''}`}>
                                        <Link to="victor">V</Link>
                                    </li>

                                    <li className={`${isActive('anousheh') ? 'text-white' : ''}`}>
                                        <Link to="anousheh">A</Link>
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
