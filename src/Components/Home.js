import React, { Fragment } from 'react'
import MainImg from '../Photo/MainImg.webp'
import Content from './Home/Content'
import Topcategory from './Topcategory'
function Home() {
  return (
    <Fragment>
    <div className='py-16 mt-5 max-w-6xl mx-auto px-4'>
    <div className='flex md:flex-row sm:flex-col-reverse flex-col-reverse justify-between items-center  mx-auto'>
    {/* main content*/}
   <Content/>
     {/* main imsage*/}
    <div className='lg:w-1/2 md:w-1/2'>
    <div>
    <img src={MainImg} alt ="online shopping main images"/>
    </div>
    </div>
    </div>
    <Topcategory/>
    </div>
    </Fragment>
  )
}

export default Home