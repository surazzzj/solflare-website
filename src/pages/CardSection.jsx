import React from 'react'
import { assets } from '../assets/assets'
import TitleSecond from '../components/TitleSecond'

const CardSection = () => {
    return (
        <div className='min-h-screen flex flex-col items-center justify-center gap-20 px-4 md:px-6 py-18 lg:py-30 xl:py-50 text-center w-full bg-white rounded-4xl mt-3'>
            <h2 className='text-4xl md:text-4xl lg:text-8xl font-bold w-full md:w-3/4 lg:w-3/4 xl:w-1/2'>Make every asset an asset</h2>
            <div className='flex flex-col md:flex-row gap-4'>
                <img className='h-full w-full xl:h-[65vh] md:h-80 rounded-4xl' src={assets.card_1} alt="" />
                <img className='h-full w-full xl:h-[65vh] md:h-80 rounded-4xl' src={assets.card_2} alt="" />
            </div>
            <div className='flex xl:gap-25 2xl:gap-[1px]'>
                <TitleSecond
                    Heading="Quick transfer"
                    Description="Send & receive Solana assets"
                />
                <TitleSecond
                    Heading="Get coins"
                    Description="Buy crypto within wallet"
                />
            </div>
            <div className='flex flex-col md:flex-row gap-4'>
                <img className='h-full w-full xl:h-[65vh] md:h-80 rounded-4xl' src={assets.card_3} alt="" />
                <img className='h-full w-full xl:h-[65vh] md:h-80 rounded-4xl' src={assets.card_4} alt="" />
            </div>
            <div className='flex xl:gap-28 2xl:gap-0'>
                <TitleSecond
                    Heading="Personalized gallery"
                    Description="Buy, collect and sell NFTs"
                />
                <TitleSecond
                    Heading="Defi. Games. Exchanges."
                    Description="Explore Solana securely"
                />
            </div>
            <button className='text-white bg-black text-md px-10 py-3 md:px-16 md:py-5 md:text-2xl rounded-full'>Start strong</button>
        </div> 
    )
}

export default CardSection