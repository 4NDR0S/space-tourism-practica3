import React from 'react'
import Header from './Header'
import Main from './Main'

export default function Home() {
    return (
        <div className="bg-cover bg-center min-h-screen" style={{ backgroundImage: "url('public/assets/home/background-home-desktop.jpg')" }}>
            <Header />
            <Main />
        </div>
    )
}