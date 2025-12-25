"use client"

import React from 'react'

const Navbar = () => {
    return (
        <nav className='flex flex-row justify-between items-center p-8 z-50 w-full fixed'>
            <p className='font-montserrat-alternates'>Sazed</p>

            <div className="flex flex-row w-1/2 pl-4">
                <div className="flex flex-row justify-start items-center w-full gap-6">
                    <button className="flex justify-center items-center px-4 py-2 rounded-full bg-gray-50 cursor-pointer" onClick={() => { }}>
                        <p>Research</p>
                    </button>

                    <button className="flex justify-center items-center px-4 py-2 rounded-full bg-gray-50 cursor-pointer" onClick={() => { }}>
                        <p>Pricing</p>
                    </button>

                    <button className="flex justify-center items-center px-4 py-2 rounded-full bg-gray-50 cursor-pointer" onClick={() => { }}>
                        <p>About</p>
                    </button>

                    <button className="flex justify-center items-center px-4 py-2 rounded-full bg-gray-50 cursor-pointer" onClick={() => { }}>
                        <p>Contact</p>
                    </button>
                </div>

                <button className="flex flex-row justify-center items-center gap-2 px-4 py-2 rounded-full bg-black cursor-pointer" onClick={() => { }}>
                    <div className="flex p-1 bg-green-600 rounded-full" />

                    <p className='font-montserrat-alternates text-white text-sm'>SUBSCRIBE</p>
                </button>
            </div>
        </nav>
    )
}

export default Navbar