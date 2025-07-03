import React from 'react'

const TextSection = () => {
    return (
        <div className='h-full md:min-h-screen flex flex-col items-center text-center justify-center md:gap-14 gap-8 lg:gap-20 text-black w-full bg-[#FFEF46] lg:px-13 2xl:px-4 px-6 py-25 md:py-40 rounded-4xl mt-3'>
            <p className='text-xs lg:text-xl tracking-widest uppercase'>We’ve got your back</p>
            <h1 className='text-4xl md:text-6xl lg:text-7xl 2xl:text-9xl w-4/5 xl:w-2/4 md:3/4 font-bold'>Around-the-clock human support</h1>
            <p className='text-lg md:text-4xl lg:w-full xl:w-3/5 2xl:w-2/5 lg:leading-12'>Whether you’re new to crypto or an established force, our live-chat support is here to help 24/7. They are battle-tested and endlessly patient—your powerful helping hand on Solana.</p>
            <p className='text-lg md:text-3xl lg:text-4xl'>Need help?</p>
            <button className='text-md lg:text-xl 2xl:text-3xl font-medium rounded-full px-8 py-3 lg:px-14 lg:py-4 2xl:py-5 bg-black text-white'>Let's talk</button>
        </div>
    )
}

export default TextSection