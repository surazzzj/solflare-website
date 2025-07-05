import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const FeaturesPage = () => {
    return (
        <div id='careers' className='min-h-screen mt-3 w-full flex lg:flex-row flex-col gap-3 xl:gap-4'>
            <div className='h-full w-full lg:min-h-screen gap-15 md:gap-18 lg:gap-30 xl:gap-26 lg:w-[50vw] rounded-4xl text-white flex flex-col justify-evenly items-center px-4 md:px-10 py-10 md:py-20 text-center bg-[#14161B]'>
                <p className='text-xs md:text-lg xl:text-xl uppercase tracking-widest'>Enter the stronghold</p>
                <h1 className='text-3xl md:text-4xl lg:text-5xl xl:text-7xl leading-7 md:leading-none xl:tracking-tight font-bold w-full lg:w-full xl:w-3/4'>Solflare: the most powerful wallet on Solana</h1>
                <img className='py-1 h-36 lg:h[40vh] xl:h-[50vh]  md:w-80 xl:py-18' src={assets.app_icon} alt="" />
                <div className='flex flex-col md:flex-row lg:flex-col xl:flex-row gap-2 lg:gap-4'>
                    <button className='px-12 md:px-10 py-3 lg:px-13 lg:py-5 rounded-full md:text-md lg:text-xl xl:text-2xl bg-[#24262B]'>Download now</button>
                    <button className='px-12 md:px-10 py-3 lg:px-13 lg:py-5 rounded-full md:text-md lg:text-xl xl:text-2xl bg-[#24262B]'>Access wallet</button>
                </div>
            </div>
            <div className='h-full w-full lg:min-h-screen lg:w-[50vw] rounded-4xl text-white flex flex-col gap-10 md:gap-10 lg:gap-20 xl:gap-46 2xl:gap-52 text-center items-center px-4 md:px-10 py-10 lg:py-20 xl:py-24 bg-[#14161B]'>
                <div className='flex gap-4 md:gap-6 xl:gap-8 text-sm md:text-md xl:text-lg md:tracking-wide'>
                    <span className='uppercase'>privacy policy</span>
                    <span className='uppercase'>cookies</span>
                    <span className='uppercase'>sitemap</span>
                    <span className='uppercase'>brand kit</span>
                </div>
                <div className='flex flex-col w-full items-center justify-center'>
                    <div className='flex justify-between items-center h-16 w-full lg:w-3/4 border-y border-gray-800'>
                        <p className='uppercase text-xs md:text-md lg:text-lg'>product</p>
                        <p className='font-medium capitalize md:text-lg lg:text-xl xl:text-3xl'>overview</p>
                    </div>
                    <div className=' w-full lg:w-3/4 font-medium capitalize md:text-lg lg:text-xl xl:text-3xl h-16 border-b border-b-gray-800 flex items-center justify-end'>Essential features</div>
                    <div className=' w-full lg:w-3/4 font-medium capitalize md:text-lg lg:text-xl xl:text-3xl h-16 border-b border-b-gray-800 flex items-center justify-end'>Security</div>
                    <div className=' w-full lg:w-3/4 font-medium capitalize md:text-lg lg:text-xl xl:text-3xl h-16 border-b border-b-gray-800 flex items-center justify-end'>Trading</div>
                    <div className=' w-full lg:w-3/4 font-medium capitalize md:text-lg lg:text-xl xl:text-3xl h-16 flex items-center justify-end'>Staking</div>
                    <div className='flex justify-between items-center h-16 w-full lg:w-3/4 border-y border-gray-800'>
                        <p className='uppercase text-xs md:text-md lg:text-lg'>company</p>
                        <p className='font-medium capitalize md:text-lg lg:text-xl xl:text-3xl'>about</p>
                    </div>
                    <div className=' w-full lg:w-3/4 font-medium capitalize md:text-lg lg:text-xl xl:text-3xl h-16 border-b border-b-gray-800 flex items-center justify-end'>Careers</div>
                    <div className=' w-full lg:w-3/4 font-medium capitalize md:text-lg lg:text-xl xl:text-3xl h-16 border-b border-b-gray-800 flex items-center justify-end'>Contact</div>
                    <div className=' w-full lg:w-3/4 font-medium capitalize md:text-lg lg:text-xl xl:text-3xl h-16 border-b border-b-gray-800 flex items-center justify-end'>Newsletter</div>
                </div>
                <div className='flex gap-6'>
                    <div className='h-10 w-10 md:h-16 md:w-16 xl:h-20 xl:w-20 rounded-full flex justify-center items-center bg-white'>
                        <img className='h-6 md:h-8 xl:h-10' src={assets.twitter_img} alt="" />
                    </div>
                    <div className='h-10 w-10 md:h-16 md:w-16 xl:h-20 xl:w-20 rounded-full flex justify-center items-center bg-white'>
                        <img className='h-6 md:h-8 xl:h-10' src={assets.youtube_img} alt="" />
                    </div>
                    <div className='h-10 w-10 md:h-16 md:w-16 xl:h-20 xl:w-20 rounded-full flex justify-center items-center bg-white'>
                        <img className='h-6 md:h-8 xl:h-9' src={assets.linkedIn_img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturesPage