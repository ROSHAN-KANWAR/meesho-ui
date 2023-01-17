import React, { Fragment,useState,useEffect } from 'react'
import MainImg from '../Photo/MainImg.webp'
import Content from './Home/Content'
import Topcategory from './Topcategory'
import Product from '../Product/Product'
import axios from 'axios';
const baseurl = "https://dummyjson.com/products/?limit=40"
function Home() {
  const [product,Setproduct] = useState([]) 
  const [Isloading, setIsloading] = useState(false)
  const Fetchs = async()=>{
    try{
      const res = axios.get(baseurl);
      Setproduct((await res).data.products)
      setIsloading(true)
    }
    catch(error)
    {
 console.log(error.message)
        }
  }
  useEffect(()=>{
   Fetchs()
  },[])
  return (
    <Fragment>

    <div className='py-16 mt-5 max-w-6xl mx-auto px-4'>
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
    Isloading ?
    <div className='py-16 mt-5 max-w-7xl mx-auto px-4'>
    <Product foryou = "You" product={product} />
    </div>
     :
      <div className='flex items-center h-screen justify-center animate-spin'>
      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-loader-quarter" width="54" height="54" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <line x1="12" y1="6" x2="12" y2="3" /> <line x1="6" y1="12" x2="3" y2="12" /> <line x1="7.75" y1="7.75" x2="5.6" y2="5.6" /> </svg> 
      </div>
  }
    </Fragment>
  )
}

export default Home