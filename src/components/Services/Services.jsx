import React from 'react'
import { Data } from '../../data'
import '../Services/Services.css'
import ServiceCard from '../ServiceCard';
import {AiOutlineArrowRight} from 'react-icons/ai';
import online from '../../assets/online.svg'
const Services = () => {
    //mappping items on Data
    const item=Data.serv.map((itembox)=>{

        return(
            <div className='col-md-4'>
                <ServiceCard title={itembox.title} text={itembox.text} icon={itembox.icon}/>

            </div>
        )
    })
  return (
   <section className='services' id="Services">
    <div className='container'>
        <div className='row'>
            <div className='col-lg-12'>
                <h2>Our Services</h2>
                <p>We craft digital, graphic and dimensional thinking, to create category leading brand experiences that 
                    have meaning and add a value for our clients.</p>
            </div>

        </div>
        <div className='row'>
            {item}

        </div>
        <div className='row last'>
            <div className='col-md-6'>
                <h3>A digital web design studio creating 
                    modern & engaging online experiences</h3>
                <p>Separated they live in Bookmarksgrove right at the coast of the
                     Semantics, a large language ocean. A small river named Duden
                      flows by their place and supplies it with the necessary regelialia.</p>

            <ul>
                <li>We put a lot of effort in design.</li>
                <li>The most important ingredient of successful website.</li>
                <li>Sed ut perspiciatis unde omnis iste natus error sit.</li>
               <li>Submit Your Orgnization.</li>
            </ul> 
            <button>
                Learn More <AiOutlineArrowRight/>
            </button>
            </div>
            <div className='col-md-6'>
             <img src={online} alt="online"/>
            </div>

        </div>


    </div>

   </section>
  )
}

export default Services
