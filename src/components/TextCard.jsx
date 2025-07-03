import React from 'react'

const TextCard = ({ Title, Paragraph, text1, text2 }) => {
    return (
        <div className='h-full w-full md:h-screen md:w-[49vw] flex justify-between flex-col gap-8 px-6 py-10 pb-40 md:p-18 bg-[#F5F8FF] rounded-4xl'>
            <h1 className='text-2xl md:text-5xl lg:text-6xl xl:text-8xl font-bold'>{Title}</h1>
            <div className='flex flex-col gap-12'>
                <p className='text-md md:text-2xl xl:text-4xl leading-tight'>{Paragraph}</p>
                <div className='flex flex-col xl:flex-row mx-auto xl:mx-0 gap-4'>
                    <button className='px-7 py-3 md:px-14 xl:py-5 text-md md:text-xl rounded-full font-medium bg-black text-white'>{text1}</button>
                    <button className='px-7 py-3 md:px-14 xl:py-5 text-md md:text-xl rounded-full font-medium border'>{text2}</button>
                </div>
            </div>
        </div>
    )
}

export default TextCard