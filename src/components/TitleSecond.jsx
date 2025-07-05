import React from 'react'

const TitleSecond = ({ Heading, Description }) => {
    return (
        <div className='w-full px-4 md:px-8 py-4 md:py-5 flex flex-col text-center items-center justify-center gap-4 md:gap-5'>
            <p className='uppercase tracking-widest text-sm md:text-md lg:text-xl'>{Heading}</p>
            <p className='text-xl md:text-3xl w-full 2xl:text-6xl lg:w-3/4 tracking-tight font-bold'>{Description}</p>
        </div>
    )
}

export default TitleSecond