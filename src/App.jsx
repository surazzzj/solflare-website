import React from 'react'
import Navbar from './components/Navbar'
import Header from './pages/Header'
import Pricing from './pages/Pricing'
import Title from './components/Title'
import VideoComp from './components/VideoComp'
import ShowcaseComp from './components/ShowcaseComp'
import { assets } from './assets/assets'
import VideoCard from './components/VideoCard'
import TextCard from './components/TextCard'
import CardSection from './pages/CardSection'
import TextSection from './pages/TextSection'
import Slider from './pages/Slider'
import VideoPage from './pages/VideoPage'
import FeaturesPage from './pages/FeaturesPage'
import FooterPage from './pages/FooterPage'

const App = () => {
  return (
    <div className='bg-black px-2 md:px-4 min-h-screen'>
      <Navbar />
      <Header />
      <Pricing />
      <Title Heading="Independence in your hands" Description="A revolution in financial freedom" />
      <div className='flex md:flex-row flex-col gap-2 md:gap-3'>
        <VideoComp src={assets.shield_video} />
        <ShowcaseComp
          heading="Founding the new world"
          paragraph="Solana is the fastest-growing blockchain ecosystem in DeFi and Web3, 
          with SOL as its currency. Famed for its speed, near-zero fees, and memecoins,
           it’s also home to a digital community building a more secure, lucrative, and fun new world."
        />
      </div>
      <div className='flex md:flex-row flex-col mt-2 md:mt-3 gap-2 md:gap-3'>
        <VideoComp src={assets.key_video} />
        <ShowcaseComp
          heading="Keys to the new world"
          paragraph="Your Solflare wallet is your all-access pass to Solana.
           It’s a secure way to trade coins, stake SOL, and explore a whole new world of Solana-based apps.
            The power is in your hands."
        />
      </div>
      <Title Heading="The power in your hands" Description="Solflare is your sword and shield" />
      <div className='flex md:flex-row flex-col mt-2 md:mt-3 gap-2 md:gap-3'>
        <VideoCard src={assets.phonePrimary_video} />
        <TextCard
          Title="Liberate your finances"
          Paragraph="From live market updates to trend detection, Solflare has all the tools you need to trade and stake successfully."
          text1="Master your trade"
          text2="Stake your claim"
        />
      </div>
      <div className='flex md:flex-row flex-col mt-2 md:mt-3 gap-2 md:gap-3'>
        <VideoCard src={assets.phoneSecondary_video} />
        <TextCard
          Title="Keep your valuables safe"
          Paragraph="Putting your coins and NFTs in Solflare means securing them in the safest crypto Stronghold. Your security is our sacred principle."
          text1="Enter Stronghold"
          text2="Master your trade"
        />
      </div>
      <CardSection />
      <TextSection />
      <Title
        Heading="Here to serve"
        Description="Empowering our people"
      />
      <p className='text-white text-lg w-full md:text-3xl text-center xl:w-2/5 -mt-12 px-6 md:px-2 pb-12 mx-auto'>
        A product is only as strong as its devoted community. We’re here to build our wealth, educate and entertain. Join us.
      </p>
      <Slider />
      <VideoPage />
      <FeaturesPage />
      <FooterPage />
    </div>
  )
}

export default App