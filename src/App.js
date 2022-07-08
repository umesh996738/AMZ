import React from 'react'
import Header from './Header'
import Home from './Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CheckOut from './CheckOut';
import Umesh from './Umesh';




function App() {
  return (
    <>
      <Router>
        <div className='app'>
          <Header />
          
            <Routes>
            <Route  path="/" element={<Home />} />
            <Route  path='/user' element={<CheckOut />} />
            <Route path='/user/create' element={ <Umesh />} />

          </Routes>  
        </div>
      </Router> 
    </>
  )
}

export default App
