import React from 'react'
import { useAuth } from '../context/auth'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Donate = () => {
    const [auth, setAuth] = useAuth([])
  return (
    <div>
      <div>
      <Navbar/>
      </div>
      <div className='m-9 p-9 mx-auto max-w-screen-md h-[50%] bg-cover bg-[url(./images/bg1.png)] cursor-pointer
        hover:scale-100 transition-all duration-200]
        bg-white rounded-lg'>
          <h3 className='font-poppins font-bold text-center'>Payment</h3>
        
      </div>
      <div>
        <Footer/>
      </div>
        
    </div>
  )
}

export default Donate