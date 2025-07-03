import React from 'react'

const VideoCard = ({ src }) => {
    return (
        <div className='h-full md:h-screen relative w-full md:w-[49vw] overflow-hidden rounded-4xl'>
            <video
                src={src}
                autoPlay
                muted
                loop
                className='h-full w-full object-cover'
            />
        </div>
    )
}

export default VideoCard