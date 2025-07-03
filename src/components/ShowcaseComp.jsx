import React from 'react'

const ShowcaseComp = ({ heading, paragraph }) => {
    return (
        <div className='h-full w-full md:h-screen md:w-[49vw] flex flex-col gap-8 px-6 py-10 pb-50 md:p-18 bg-[#F5F8FF] rounded-4xl'>
            <p className='text-xs md:text-md uppercase tracking-wider'>{heading}</p>
            <p className='text-lg md:text-4xl lg:5xl 2xl:text-6xl font-medium leading-tight'>{paragraph}</p>
        </div>
    )
}

export default ShowcaseComp