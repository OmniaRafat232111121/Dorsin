import React from 'react'
import  {Data}  from '../../../data';
import '../Pricing/Pricing.css'
const Pricing = () => {
    const itemPricing=Data.Pricing.map((itembox)=>{
        return(
            <div className='col-md-4'>
                <div className='box'>
                       <h6>{itembox.title}</h6>
                <h4>{itembox.price}</h4>
                <span>{itembox.time}</span>
                    <ul>
             
                <li>
                    <span>Bandwidth</span>
                    {itembox.BandWidth}
                </li>
                <li>
                    <span>onlineSpace</span>
                    {itembox.onlineSpace}
                </li>
                <li>
                    <span>Support</span>
                    {itembox.Support}
                </li>
                <li>
                    <span>Domain</span>
                    {itembox.Domain}
                </li>
                <li>
                    <span>HiddenFees</span>
                    {itembox.HiddenFees} 
                </li>
                    </ul>
                    <button>Join Now</button>
                </div>
               

            </div>
        )
    })
  return (
    <div className='prices'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12 col-lg-12'>
                    <h2>our pricing</h2>
                    <p>Call to action pricing table is really crucial to your for your business website. Make your bids stand-out with amazing options.</p>
                </div>

            </div>
            <div className='row'>
                
                 {itemPricing}
                 
                

            </div>

        </div>

      
    </div>
  )
}

export default Pricing
