import React from 'react'
import Clients from '../parts/Clients'
import Footer from '../parts/Footer'
import Header from '../parts/Header'
// import Hero from '../parts/Hero'
// import BrowseRoom from '../parts/HomePage/BrowseRoom'
import ProductDetails from '../parts/Details/ProductDetails.js'
import Sitemap from '../parts/Sitemap'
import Breadcrumb from '../components/Breadcrumb/index.js'
import Suggestion from '../parts/Details/Suggestion'
import ShoppingCart from '../parts/Cart/ShoppingCart'
import ShippingDetails from '../parts/Cart/ShippingDetails'
import { Link } from 'react-router-dom'
import PageErrorMessage from '../parts/PageErrorMessage'

function NotFound() {
  return (
    <>
        <Header theme="black"/>
        <PageErrorMessage/>
        <Sitemap/>
        <Footer/>
    </>
  )
}

export default NotFound