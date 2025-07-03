import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
    return (
        <div className='h-full mt-14 md:mt-24 relative md:min-h-screen w-full flex flex-col bg-[#F6F8FE] justify-center items-center px-4 gap-8 md:gap-16 xl:gap-16 2xl:gap-18 rounded-3xl md:rounded-[3rem] pt-15 md:pt-25 '>
            <img className='md:w-3xl' src={assets.solflare_icon} alt="" />
            <p className='text-3xl md:text-6xl w-full xl:w-2/4 xl:text-5xl md:w-4xl font-medium text-center'>Hold strong with the most powerful wallet on Solana</p>
            <button className='px-6 py-3 md:px-13 xl:px-12 xl:py-4 xl:text-2xl text-sm md:text-2xl bg-black text-white rounded-full'>Download now</button>
            {/* <img className='h-1/2 w-2xl' src={assets.hero} alt="" /> */}
            <video
                src={assets.header_video}
                autoPlay
                muted
                loop
                className='h-1/2 w-lg md:w-2xl'
            />
        </div>
    )
}

export default Header