import React from 'react'
import { Fragment} from 'react'
import {useCardContext } from '../Context/CardContext'
import { Link } from 'react-router-dom'
function Profile() {
 const {cart}=useCardContext();
  
  return (
   <Fragment>
   <div className="lg:mr-0 md:mr-0 sm:mr-8 mr-8 profile-add flex lg:w-1/3 justify-center items-center text-center ">
   <div className = "add-to-card lg:w-1/2 md:block hidden">
       <span className=''>Become a Supplier</span>
       </div>
       <div className = "md:px-1 sm:px-2 px-2 profile-cart lg:w-1/3 border-l-4 border-slate-300  border-r-4  flex items-center justify-center">
       <div className='px-1'>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
       <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
     </svg>
     <span className='md:block hidden'>Profile</span>
       </div>
       </div>

       <div className = "md:px-1 sm:px-2 px-2 hover:text-pinkbase add-to-card lg:w-1/3 flex items-center justify-center">
       <Link to="/add-cart-list" className='px-1 py-1'>
       <span class="relative inline-block flex flex-col items-center">
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
     <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
   </svg>
 <span class="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">{cart.length}</span></span>
<span className='md:block hidden'>Cart</span>
       </Link>
       </div>  
        </div>
 
   </Fragment>
  )
}
export default Profile