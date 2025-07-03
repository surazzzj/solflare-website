import React from 'react'
import { assets } from '../assets/assets'

const VideoPage = () => {
    return (
        <div className='h-full xl:min-h-screen w-full bg-[#E7E9EF] rounded-4xl mt-2 text-center flex flex-col gap-8 lg:gap-20 justify-end items-center pt-20 lg:pt-30 md:px-12 lg:px-2 px-6'>
            <h1 className='text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold w-full lg:w-3/4 '>In every wallet a kingdom, on every head a crown</h1>
            <p className='text-lg md:text-2xl lg:text-3xl '>Master your own crypto destiny with your Solflare wallet.</p>
            <video className='md:h-[80vh] xl:h-[90vh] w-full'
                autoPlay
                loop
                muted
                src={assets.flag_video} ></video>
        </div>
    )
}

export default VideoPage