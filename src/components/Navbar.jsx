import React from 'react'
import { NavLink,useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Modal from '../Modal';
import Cart from '../screens/Cart'

const Navbar = () => {
  let navigate=useNavigate()
  const [CartView, setCartView] = useState()
  const handlelogout=()=>{
    localStorage.removeItem('tokens');
    navigate('/login')
  }
  return (
    <div className='bg-red-900'>
    <nav className='flex justify-between  p-2 '>
      <h1 className='text-3xl mx-12'>
          <span className='text-orange-600 font-sans '>Go</span>
          <span className=' text-red-600 font-sans'>Food</span>
          </h1>
      <ul className='flex gap-10 mx-3 cursor-pointer'>
      {
  localStorage.getItem("tokens")? (
    <>
      <div className='hover:font-bold text-white font-sans' onClick={()=>{setCartView(true)}}>My Cart</div>
      {CartView?<Modal onClose={()=>{setCartView( false)}}><Cart/></Modal>:null}
      <NavLink to="/" className='hover:font-bold text-white font-sans'>Home</NavLink>
      <NavLink to="/myorderdata" className='hover:font-bold text-white font-sans'>My orders</NavLink>
      <NavLink onClick={handlelogout} to="/login" className='hover:font-bold text-white font-sans'>Logout</NavLink>
      <NavLink to="/contact" className='hover:font-bold text-white font-sans'>Contact us</NavLink>
    </>
  ) : (
    <>
      <NavLink to="/" className='hover:font-bold text-white font-sans'>Home</NavLink>
      <NavLink to="/login" className='hover:font-bold text-white font-sans'>Login</NavLink>
      {/* <NavLink to="/createuser" className='hover:font-bold text-white font-sans'>Signup</NavLink> */}
      <NavLink to="/contact" className='hover:font-bold text-white font-sans'>Contact us</NavLink>
    </>
  )
}

      </ul>
    </nav>
  </div>
  )
}

export default Navbar