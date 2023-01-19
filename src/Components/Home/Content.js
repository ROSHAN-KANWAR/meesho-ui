import React, { Fragment } from 'react'
import HomeapiFetch from './HomeapiFetch'

function Content() {
  return (
   <Fragment>
   <div className='lg:w-1/2  md:w-1/2 sm:w-full w-full '>
   <div className='lg:px-2 md:px-4 sm:px-4 px-4 homecontent'>
   <h1 style={{fontWeight:'bold'}} className='text-slate-800'>
   <span >Lowest Price</span><br/>
   <span>Best Quality Shopping</span>
   </h1>
    {/* main delivery */}
    <div className='flex items-center py-4 flex-wrap'>
<HomeapiFetch/>
    </div>
    <div className='lg:w-2/3 md:w-2/3 sm:w-full w-full mt-4 px-4 py-2 bg-pinkbase text-textwhite rounded-md flex'>
    <img  src='https://images.meesho.com/images/pow/playstoreSmallIcon.webp' loading='lazy' alt='playstrore icons for meesho app' />
   <span style={{fontSize:'15px' ,fontWeight:'bold'}} className="mx-2">Download The Meesho App</span>
    </div>
   </div>
    </div>
   </Fragment>
  )
}

export default Content