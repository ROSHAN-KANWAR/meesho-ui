import React, { Fragment } from 'react'
import Homeapi from '../../ApiData/Homeapi'
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
  {
    Homeapi.map((ele ,inds)=>{
      const {icon ,text} = ele;
      return(
        <div className='lg:w-1/3 py-2 flex items-center' key={inds}>
        <div className='p-2 rounded-full bg-pink-200 flex items-center'>
        <img className='mx-auto' src={icon} alt='playstror' loading='lazy' />
        </div>
        <div className='mx-2 text-slate-800' style={{fontSize:'16px' ,fontWeight:'bold'}}>
        <span className=''> {text} </span>
        </div>
        </div>
      )
    })
  }
    </div>
    <div className='lg:w-2/3 mt-4 px-4 py-2 bg-pinkbase text-textwhite rounded-md flex'>
    <img  src='https://images.meesho.com/images/pow/playstoreSmallIcon.webp' loading='lazy' alt='playstrore icons for meesho app' />
   <span style={{fontSize:'20px' ,fontWeight:'bold'}} className="mx-2">Download The Meesho App</span>
    </div>
   </div>
    </div>
   </Fragment>
  )
}

export default Content