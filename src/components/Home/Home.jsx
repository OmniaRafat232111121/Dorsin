import React from 'react'
import Header from './Header/Header'
import Navs from './Navs/Navs'
import Services from '../Services/Services'
import Banner from '../Banner/Banner'
import Pricing from './Pricing/Pricing'
import People from '../people/People'


const Home = () => {
  return (
    <div>
      <Navs/>
      <Header/>
      <Services/>
      <Banner/>
      <Pricing/>
      <People/>
    </div>
  )
}

export default Home
