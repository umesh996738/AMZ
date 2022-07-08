import React from 'react'
import './Home.css';
import Product from './Product';


function Home() {
  return (
    <>
          <div className='home'>
              <div className='home_container'>
                  <img  className = 'home_image' src='./images/p3.jpg' alt='Home' />
                <div className='home_row'>
            <Product
              id = '235'
              title='The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback – 6 October 2011'
              price='23.85'  
              rating={ 4 } img = './images/thestartup.jpg'
            />
            <Product
              id = '34213'
              title='Start With Why: How Great Leaders Inspire
               Everyone To Take Action Paperback – 6 October 2011'
                                                                                
              price='34.6'
              rating={ 4 } img = './images/stay.jpg'
              
                  />
                      
                      
                  </div>
          <div className='home_row'>
            <Product
              id = '234'
              title=' The Lean Startup: How Constant Innovation Creates Radically Successful 
              Businesses Paperback – 6 October 2011'
              price='34.6'
              rating={ 4 } img = './images/thestartup.jpg'
              
            />
            <Product
              id = '3545'
              title='Samsung Galaxy S20 FE 5G (Cloud Navy, 8GB RAM, 128GB Storage) with No Cost EMI & Additional Exchange Offers
'
              price='34.6'
              rating={ 4 } img = './images/m.jpg'
              
            />
            <Product
              id = '2324'
              title='LOUIS STITCH Mens Premium Handmade Finest Leather Carnelian Red Moccasins Buckle Loafers Slip on for Men (Prague_ST)'
              price='34.6'
              rating={ 4 } img = './images/m.jpg'
              
                  />
                  </div>
          <div className='home_row'>
            <Product
              id = '214'
              title=' The Lean Startup: How Constant Innovation Creates 
              Radically Successful Businesses Paperback – 6 October 2011'
              price='34.6'
              rating={ 4 } img = './images/m.jpg'
              
                  />
                      
                  </div>


                  
              </div>
                
        </div>     
    </>
  )
}

export default Home
