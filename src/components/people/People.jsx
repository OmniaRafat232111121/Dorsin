import React from 'react'
import { Data } from '../../data'
import "./People.css"

const People = () => {
    const person=Data.People.map((itembox)=>{
        return(
            <div className='col-md-3'>
                <div className='box'>
                    <img src={itembox.img} alt=""/>
                    <h6>{itembox.name}</h6>
                    <span>{itembox.job}</span>

                </div>

            </div>
        )
    })
  return (
    <div className='people'>
      <div className='container'>
        <div className='row'>
            <div className='col-lg-12'>
                <h2>BEHIND THE PEOPLE</h2>
               <p>It is a long established fact that create category leading brand experiences a reader will be distracted 
                <br/>by the readable content of a page when looking at its layout.</p>

        </div>

        </div>
        <div className='row'>
            {person}

        </div>

      </div>

      
    </div>
  )
}

export default People
