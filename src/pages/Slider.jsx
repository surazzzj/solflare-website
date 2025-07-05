import React from 'react'
import Card from '../components/Card'
import { assets } from '../assets/assets'

const Slider = () => {

    const cardData = [
        {
            Image: assets.card1_image,
            name: "Shardy",
            idName: "@shardycrypto",
            description: "I don't use any other crypto wallet other than solflare. Security is most important to me and only @solflare_wallet can provide this.",
            dateTime: "12:31:03 PM . FEB 24 . 2025"
        },
        {
            Image: assets.card2_image,
            name: "toly",
            idName: "@aeyakovenko",
            description: "@solflare_wallet is awesome. Team is consistently first to ship and new feature for @solana.",
            dateTime: "05:40:49 PM . APR 6 . 2023"
        },
        {
            Image: assets.card3_image,
            name: "Hatsu",
            idName: "@hatsunama",
            description: "Best wallet out there Anything else is a disservice to you And a disservice to your bags so Secure. so Simple. so Solflare",
            dateTime: "06:22:55 PM . JUN 8 . 2025"
        }
    ]

    return (
        <div className='min-h-screen xl:min-h-screen relative py-54 md:py-54 lg:py-10 flex overflow-hidden gap-30 w-full bg-black'>

            <div className="hidden 2xl:inline-block 2xl:left-40 absolute top-0 left-60 h-full md:h-screen w-xl bg-gradient-to-r from-black to-transparent z-8 pointer-events-none" />
            <div className='h-screen w-full flex flex-col lg:flex-row gap-2 justify-center items-center'>
                {cardData.map((item, index) => (
                    <Card key={index}
                        image={item.Image}
                        name={item.name}
                        idName={item.idName}
                        description={item.description}
                        dateTime={item.dateTime}
                    />
                ))}
            </div>
            <div className="hidden 2xl:inline-block 2xl:right-40 absolute top-0 right-60 h-full md:h-screen w-xl bg-gradient-to-l from-black to-transparent z-8 pointer-events-none" />
        </div>


    )
}

export default Slider