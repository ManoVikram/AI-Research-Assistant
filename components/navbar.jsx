import React from 'react'

const Navbar = () => {
    return (
        <nav className='flex flex-row justify-between items-center p-8 z-50 w-full fixed'>
            <p className='font-montserrat-alternates'>AI RESEARCH ASSISTANT</p>

            <div className="flex flex-row w-1/2 pl-4">
                <div className="flex flex-row justify-start items-center w-full gap-6">
                    <div className="flex justify-center items-center px-4 py-2 rounded-full bg-gray-50">
                        <p>Research</p>
                    </div>

                    <div className="flex justify-center items-center px-4 py-2 rounded-full bg-gray-50">
                        <p>Pricing</p>
                    </div>
                    
                    <div className="flex justify-center items-center px-4 py-2 rounded-full bg-gray-50">
                        <p>About</p>
                    </div>

                    <div className="flex justify-center items-center px-4 py-2 rounded-full bg-gray-50">
                        <p>Contact</p>
                    </div>
                </div>

                <div className="flex flex-row justify-center items-center gap-2 px-4 py-2 rounded-full bg-black">
                    <div className="flex p-1 bg-green-600 rounded-full" />

                    <p className='font-montserrat-alternates text-white text-sm'>SUBSCRIBE</p>
                </div>
            </div>
        </nav>
    )
}

export default Navbar