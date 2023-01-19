import React, { Fragment} from 'react'
import MainImg from '../Photo/MainImg.webp'
import Content from './Home/Content'
import Topcategory from './Topcategory'
import Product from '../Product/Product'
import { GlobalProductContext } from '../Context/Productcontext'
function Home() {
  const {products ,isLoading}= GlobalProductContext()
  
  return (
    <Fragment>
    <div className='md:py-16 sm:py-6 py-3 mt-5 max-w-6xl mx-auto px-4'>
    <div className='flex md:flex-row sm:flex-col-reverse flex-col-reverse justify-between items-center  mx-auto'>
    {/* main content*/}
   <Content/>
     {/* main imsage*/}
    <div className='lg:w-1/2 md:w-1/2'>
    <div >
    <img src={MainImg} alt ="online shopping main images"/>
    </div>
    </div>
    </div>
    <Topcategory/>
    </div>
 {
    isLoading ?
    <div className='md:py-16 sm:py-8 px-4 mt-5 max-w-7xl mx-auto md:px-4  sm:px-2 px-2 relative'>
    <Product foryou = "You" product={products} />
    </div>
     :
      <div className="flex  h-2/3 justify-center w-2/3 animate-spin">
      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-loader-quarter" width="54" height="54" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> 
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <line x1="12" y1="6" x2="12" y2="3" /> <line x1="6" y1="12" x2="3" y2="12" /> <line x1="7.75" y1="7.75" x2="5.6" y2="5.6" /> </svg> 
      </div>
  }
    </Fragment>
  )
}

export default Home