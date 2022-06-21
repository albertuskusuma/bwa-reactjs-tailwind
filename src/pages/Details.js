import React from 'react'
import Clients from '../parts/Clients'
import Footer from '../parts/Footer'
import Header from '../parts/Header'
// import Hero from '../parts/Hero'
// import BrowseRoom from '../parts/HomePage/BrowseRoom'
import ProductDetails from '../parts/Details/ProductDetails.js'
import Sitemap from '../parts/Sitemap'
import Breadcrumb from '../components/Breadcrumb/index.js'


function Details(props) {
  return (
    <>
      <Header theme="black" position=""/>
      <Breadcrumb list={[
        {url:"/", name:"Home"},
        {url:"/categories/91231", name:"Office Room"},
        {url:"/categories/91231/products/7888", name:"Details"},
      ]}/>
      <ProductDetails/>
      <Clients/>
      <Sitemap/>
      <Footer/>
    </>
  )
}

export default Details