import React from 'react'
import Header from './Header/Header'
import Navs from './Navs/Navs'
import Services from '../Services/Services'
import Banner from '../Banner/Banner'


const Home = () => {
  return (
    <div>
      <Navs/>
      <Header/>
      <Services/>
      <Banner/>
    </div>
  )
}

export default Home
