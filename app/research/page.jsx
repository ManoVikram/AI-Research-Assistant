"use client"

import Image from 'next/image'
import React from 'react'

const ResearchPage = () => {
  return (
    <section className='flex flex-col flex-1 justify-center items-center'>
      <div className="flex flex-col justify-center items-center w-full gap-8">
        <div className='flex flex-col justify-center items-center gap-5'>
          <h1 className='text-7xl'>Hello, Researcher</h1>

          <div className="flex flex-col justify-center items-center gap-2">

            <h2 className='text-5xl font-montserrat-alternates font-bold text-gray-400'>Let&apos;s make your research easier.</h2>

            <p className='text-lg font-montserrat-alternates text-gray-400'>Your personal AI assistant for research and knowledge.</p>
          </div>
        </div>

        <div className="flex flex-col justify-start items-start w-2/3 px-6 py-3 bg-amber-50/80 rounded-3xl gap-6">
          <input type="text" className='w-full text-lg outline-none ring-0 border-none' placeholder='Ask anything...' value="" onChange={() => { }} />

          <div className="flex justify-between items-center w-full">
            <div className="flex aspect-square h-10 w-10 rounded-lg relative cursor-pointer" onClick={() => { }}>
              <Image src="/add.svg" alt='add-icon' fill />
            </div>

            <div className="flex justify-center items-center bg-black rounded-lg aspect-square p-1 relative cursor-pointer" onClick={() => { }}>
              <Image src="/up-arrow.svg" alt='up-arrow' className='object-contain' height={24} width={24} />
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}

export default ResearchPage