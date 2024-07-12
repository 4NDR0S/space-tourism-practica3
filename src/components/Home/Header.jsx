import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import logoHome from '../../assets/shared/logo.svg'

export default function Header() {

    const location = useLocation();

    const isActive = (path) => {
        return location.pathname.includes(path)
    }
    return (
        <div className='flex justify-between pt-8 items-center'>
            <div className='h-[48px] w-[800px] flex items-center'>
                <img src={logoHome} alt="Logo" className="h-full px-16" />
                <div className='w-full h-[1px] bg-[#979797]'></div>
            </div>

            <nav className="bg-white/10 backdrop-blur-md px-16 flex h-full items-center justify-center">
            <ul className="flex gap-12">
                <li className={`uppercase text-[19px] font-extralight text-white h-[96px] flex items-center justify-center ${isActive('home') ? 'border-b-4 border-white' : ''}`}>
                    <Link to="/home" className="h-full w-full flex items-center justify-center">00 Home</Link>
                </li>
                <li className={`uppercase text-[19px] font-extralight text-white h-[96px] flex items-center justify-center ${isActive('destination') ? 'border-b-4 border-white' : ''}`}>
                    <Link to="/destination" className="h-full w-full flex items-center justify-center">01 Destination</Link>
                </li>
                <li className={`uppercase text-[19px] font-extralight text-white h-[96px] flex items-center justify-center ${isActive('crew') ? 'border-b-4 border-white' : ''}`}>
                    <Link to="/crew" className="h-full w-full flex items-center justify-center">02 Crew</Link>
                </li>
                <li className={`uppercase text-[19px] font-extralight text-white h-[96px] flex items-center justify-center ${isActive('technology') ? 'border-b-4 border-white' : ''}`}>
                    <Link to="/technology" className="h-full w-full flex items-center justify-center">03 Technology</Link>
                </li>
            </ul>
        </nav>
        </div>
    )
}
