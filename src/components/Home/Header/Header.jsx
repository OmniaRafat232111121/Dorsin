import React from 'react'
import '../Header/Header.css'
const Header = () => {
  return (
   <header>
  <div className='header-overflow'>
  <div className='container'>
        <div className='row'>
            <div className='col-lg-12'>
                <h2>We help startups launch their products</h2>
                <p>Etiam sed.Interdum consequat proin vestibulum class at.</p>
                 <form>
                    <input type="email" placeholder='Email'/>
                    <button type='submit'>Subscripe</button>
                 </form>
            </div>

        </div>

    </div>
  </div>
   </header>
  )
}

export default Header
