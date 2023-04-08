import React from 'react'
import Navs from '../Home/Navs/Navs';
import Header from '../Home/Header/Header';
import Services from '../Services/Services';
import Pricing from '../Home/Pricing/Pricing';
import Banner from '../Banner/Banner';
import People from '../people/People';
import Process from '../process/Process'
import Footer from '../Footer/Footer';
const Home = () => {
  return (
    <div>
      <Navs/>
      <Header/>
      <Services/>
      <Banner/>
      <Pricing/>
      <People/>
     
      <Process/>
      <Banner/>
      <Footer/>
     
      
    </div>
  )
}

export default Home
