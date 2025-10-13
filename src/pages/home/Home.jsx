import React from 'react'
import Banner from './Banner'
import Categories from './Categories'
import HeroSection from './HeroSection'
import TrendingProduct from '../shop/TrendingProduct'
import DealSection from './DealSection'
import PromoBanner from './PromoBanner'

const Home = () => {
  return (
    <>
        <Banner />
        <Categories/>
        <HeroSection/>
        <TrendingProduct/>
        <DealSection />
        <PromoBanner />
    </>
  )
}

export default Home