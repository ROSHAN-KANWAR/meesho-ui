import React, { Fragment } from 'react'
import WomenImg from '../../Photo/women.webp'
import MensImg from '../../Photo/mens.webp'
import KidsImg from '../../Photo/kids.webp'
import Essential from './Essential'
function Topcat() {
  return (
  <Fragment>
  <div className='py-16'>
  <div className='flex justify-between mx-auto  px-3  items-end  bg-pink-100 py-12'>
  {/* women */}
  <div className='lg:w-1/3 mx-2 lg:h-full'>
  <img src={WomenImg} alt="women wear " />
  </div>
    {/* women */}
  <div className='lg:w-2/3 mx-2'>
  <div className='lg:flex'>
  <img src={MensImg} alt="menswear " className='mx-2' />
  <img src={KidsImg} alt="kidswear " />
  </div>
  </div>
  </div>
  {/* Essential Compo */}
 
  </div>
  <Essential/>
  </Fragment>
  )
}

export default Topcat