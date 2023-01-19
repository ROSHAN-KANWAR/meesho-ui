import React, { Fragment } from 'react'
import Essentialapi from '../../ApiData/Essentialapi'
function Essential() {
  return (
    <Fragment>
    <div className='md:flex justify-between md:py-24 sm:py-12 py-12 mx-auto  px-6  items-center  bg-slate-100 py-12'>
    {/* women */}
    <div className='lg:w-1/3 mx-2 lg:h-full flex justify-center'>
  <div>
  <span style={{fontSize:'58px',fontWeight:'bold',fontFamily:'cursive'}}>Essentials</span>
  <img src='https://images.meesho.com/images/marketing/1664368165450.webp' alt="view" />
 </div>
    </div>
      {/* women */}
    <div className='lg:w-2/3 mx-2'>
    <div className='grid grid-cols-3  gap-2'>
    {
        Essentialapi.map((ele,index)=>{
            return(
                <div className='flex flex-col justify-center' key={index}>
                <img src={ele.img} alt={ele.name} />
                <img src={ele.img1}  alt='home' />
                </div>
               
            )
        })
    }
    </div>
    </div>
    </div>
    </Fragment>
  )
}

export default Essential