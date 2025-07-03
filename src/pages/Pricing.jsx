import React from 'react'

const Pricing = () => {
    return (
        <div className='md:h-100 w-full text-black bg-[#FFEF46] gap-8 md:gap-1 rounded-3xl md:rounded-[3rem] mt-1.5 md:mt-3 flex lg:flex-row md:flex-row flex-col text-center justify-center md:justify-between md:items-end px-10 py-15 md:py-2 md:pb-13 md:px-16 lg:px-20 2xl:px-25'>
            <div className='flex flex-col gap-5 md:gap-20'>
                <p className='text-3xl md:text-5xl lg:text-6xl 2xl:text-7xl font-bold'>★4.84</p>
                <p className='text-xs md:text-lg tracking-widest md:tracking-wider uppercase'>Best rated on App Store</p>
            </div>
            <div className='flex flex-col gap-5 md:gap-20'>
                <p className='text-3xl md:text-5xl lg:text-6xl 2xl:text-7xl font-bold'>$9,861,550,121</p>
                <p className='text-xs md:text-lg tracking-widest md:tracking-wider uppercase'>Funds managed with Solflare</p>
            </div>
            <div className='flex flex-col gap-5 md:gap-20'>
                <p className='text-3xl md:text-4xl lg:text-6xl 2xl:text-7xl font-bold'>3M+</p>
                <p className='text-xs mx-auto md:text-lg tracking-widest md:tracking-wider uppercase'>Active users</p>
            </div>
        </div>
    )
}

export default Pricing