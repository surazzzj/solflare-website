import React from 'react'

const Title = ({ Heading, Description }) => {
    return (
        <div className='w-full text-white px-4 md:px-8 py-20 md:py-40 flex flex-col text-center items-center justify-center gap-8 md:gap-15'>
            <p className='uppercase tracking-wide text-sm md:text-md lg:text-xl'>{Heading}</p>
            <p className='text-4xl md:text-5xl lg:text-7xl 2xl:text-9xl w-full lg:w-2/3 2xl:w-3/6 tracking-tight font-bold'>{Description}</p>
        </div>
    )
}

export default Title