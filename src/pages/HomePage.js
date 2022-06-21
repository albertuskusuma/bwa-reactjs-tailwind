import React from 'react'
import Clients from '../parts/Clients'
import Footer from '../parts/Footer'
import Header from '../parts/Header'
import Hero from '../parts/Hero'
import BrowseRoom from '../parts/HomePage/BrowseRoom'
import JustArrived from '../parts/HomePage/JustArrived'
import Sitemap from '../parts/Sitemap'

function HomePage(props) {
  return (
    <>
      <Header theme="white" position="absolute" />
      <Hero/>
      <BrowseRoom/>
      <JustArrived/>
      <Clients/>
      <Sitemap/>
      <Footer/>
    </>
  )
}

export default HomePage