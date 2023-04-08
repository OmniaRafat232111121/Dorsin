import React from 'react'
import { Data } from '../../data'
import './Process.css';
import {AiOutlineArrowRight} from 'react-icons/ai'
const Process = () => {
    const itemProcess=Data.Process.map((itembox)=>{
        return(
            <div className='col-md-4'>
                <div className='box'>
                    <p>{itembox.title}</p>
                    <span>{itembox.text}</span>

                </div>

            </div>
        )
    })
  return (
    <div className='process'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12'>
                    <h2>WORK PROCESS</h2>
                    <p>In an ideal world this website wouldn’t exist, a client would acknowledge the importance of having web
                        <br/> copy before the design starts.</p>

                </div>

            </div>
            <div className='row'>
                
               {itemProcess}
               <button >Get Started 
                
                < AiOutlineArrowRight className='icon'/>
               </button>
            </div>

        </div>

      
    </div>
  )
}

export default Process
