import React, { Fragment } from 'react'
import Homeapi from '../../ApiData/Homeapi';
function HomeapiFetch() {
  return (
  <Fragment>
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
  </Fragment>
  )
}

export default HomeapiFetch