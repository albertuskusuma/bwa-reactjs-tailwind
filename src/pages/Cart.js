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

function Cart(props) {
  return (
    <>
      <Header theme="black" position=""/>
      <Breadcrumb list={[
        {url:"/", name:"Home"},
        {url:"/cart", name:"Shopping Cart"},
      ]}/>

        <section class="md:py-16">
            <div class="container mx-auto px-4">
                <div class="flex -mx-4 flex-wrap">
                    <ShoppingCart/>
                    <ShippingDetails/>
                </div>
            </div>
        </section>

      {/* <ProductDetails/>
      <Suggestion/> */}
    
      <Sitemap/>
      <Footer/>
    </>
  )
}

export default Cart