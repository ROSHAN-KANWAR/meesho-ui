import React, { Fragment } from 'react'
import Topcat from './Home/Topcat'

function Topcategory() {
  return (
   <Fragment>
   <div className='py-12 mt-5 max-w-6xl mx-auto'>
   <div className='flex justify-between items-center  mx-auto'>
 {/*  top category */}
 <div className='top flex justify-between items-center lg:w-full'>
 <div className='h-1 bg-pink-300 lg:w-1/5'></div>
 <div className='flex justify-center lg:w-3/5 text-slate-800'>
 <span className=' ' style={{fontSize:'35px' ,fontWeight:'bold'}} >
 Top Categories to Choose from
 </span>
 </div>
 <div className='h-1 bg-pink-300 lg:w-1/5'></div>
 </div>
  {/*  top category */}
   </div>
   <Topcat/>
   </div>
   </Fragment>
  )
}

export default Topcategory