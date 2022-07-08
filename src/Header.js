import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import './Header.css';

function Header() {
  return (
      <>
          <div className='header'>
              <div className='amazon-logo'>
                  <img  className = 'header_logo'  src = './images/am.png' alt='amazonlogo'/>
                                  
              </div>
              <div className='location'>
                  
                      <LocationOnIcon />
                  
                  
              </div>

              <div className="header_search">
                  <input className='header_searchInput' type='text'   />
                  <SearchIcon className='searchIcon' /> 
                  
              </div>
              <div className='header_nav'>
                
                    <div className='h1'>
                      <span className='header_optionlineone'>Hello umesh</span>
                      <span className = 'header_optionlinetwo'>Sing In </span>
                  </div>
                    <div className='h1'>
                      <span className='header_optionlineone'>Return</span>
                      <span className = 'header_optionlinetwo'>& order </span>
                    </div>
                    <div className='h1'>
                      <span className='header_optionlineone'>your</span>
                      <span className = 'header_optionlinetwo'>Prime </span>
                    </div>
                    <div className='header_card'>
                      
                          <AddShoppingCartIcon/>
                      
                      <span className = 'header_optionlinetwo header_count'> 0 </span>
                    </div>

                  
              </div>
              
          </div>


    </>
  )
}

export default Header