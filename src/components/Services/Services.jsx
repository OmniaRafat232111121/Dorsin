import React from 'react'
import { Data } from '../../data'
const Services = () => {
    //mappping items on Data
    const item=Data.serv.map((itembox)=>{

        return(
            <div className='col-md-4'>
                {itembox.title}
                {itembox.text}

            </div>
        )
    })
  return (
   <section className='services'>
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


    </div>

   </section>
  )
}

export default Services
