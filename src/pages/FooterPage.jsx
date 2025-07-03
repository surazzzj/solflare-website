import React from 'react'
import { assets } from '../assets/assets'

const FooterPage = () => {
    return (
        <div className='h-[97.5vh] w-full bg-[#FFEF46] flex relative flex-col items-center justify-center gap-5 xl:gap-10 my-3 rounded-4xl px-6'>
            <img className='w-[70vw] md:w-[40vw] xl:w-[45vw] 2xl:w-[48vw]' src={assets.solflare_icon} alt="" />
            <div className='text-center'>
                <p className='text-xs md:text-lg xl:text-xl tracking-widest'>THE STRONGHOLD OF THE FREE</p>
                <p className='text-xs md:text-lg xl:text-xl tracking-widest'>POPULATION 3,000,000+ . EST 2021</p>
            </div>
            <p className='text-sm md:text-2xl font-semibold'>HOLD STRONG</p>
            <p className='absolute text-xs md:text-md lg:text-lg xl:text-xl tracking-wide xl:tracking-widest uppercase bottom-15'>Copyright ©2025 Solflare.</p>

        </div>
    )
}

export default FooterPage