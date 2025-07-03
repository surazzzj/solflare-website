import React from 'react'

const Card = ({ image, name, idName, description, dateTime }) => {
    return (
        <div className='h-screen lg:h-[80vh] gap-30 w-full lg:w-[25%] bg-[#ffef46] p-6 md:p-10 flex justify-between flex-col rounded-4xl'>
            <div className='flex flex-col lg:gap-4' >
                <div className='flex gap-4'>
                    <img className='h-13 w-13 md:h-18 md:w-18 rounded-full'  src={image} alt="" />
                    <div className='flex flex-col gap-1 md:gap-2'>
                        <p className='text-2xl lg:text-3xl font-semibold'>{name}</p>
                        <p className='text-xs md:text-md lg:text-xl uppercase tracking-widest'>{idName}</p>
                    </div>
                </div>
                <p className='text-xl md:text-2xl lg:text-3xl mt-4 lg:mt-8'>{description}</p>
            </div>
            <p className='text-sm md:text-lg md:tracking-widest'>{dateTime}</p>
        </div>
    )
}

export default Card