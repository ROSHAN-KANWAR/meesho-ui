import HomeapiFetch from '../Components/Home/HomeapiFetch'
import React, { Fragment,useEffect } from 'react';
import {FaCheckDouble ,FaRupeeSign} from "react-icons/fa";
import { useParams } from 'react-router-dom';
import Productimage from './Productimage';
import ProductStar from './ProductStar';
import AddtoCart from './AddtoCart'
import { GlobalProductContext } from '../Context/Productcontext'
const API = "https://dummyjson.com/products/"
function Productdetail() {
  const {id} = useParams();
const { isSingleLoading,Singleproducts,Singleproductapis}= GlobalProductContext()

  const {images,title,category,discountPercentage,price,rating,description,brand} = Singleproducts
  
  useEffect(()=>{
   Singleproductapis(`${API}${id}`)
  });
  
  return (
   <Fragment>
   {
   isSingleLoading ?
   <div className='px-4 max-w-7xl  mx-auto py-12'>
   <div className='flex lg:flex-row flex-col'>
   {/* for product iamage */}
   <div className='lg:w-3/5 flex flex-col '>

   <Productimage productimg= {{...images}}/>

   <div className='carts flex lg:w-full justify-center mt-4  text-center  items-center '>
   <AddtoCart productval={Singleproducts} />
   <a href="/" aria-label='BUY NOW' className='d-block lg:w-1/3 mx-2  py-2 font-semibold px-3  bg-pinkbase text-textwhite flex items-center justify-center  hover:bg-pink-500' ><FaCheckDouble/> <span className='mx-2'>BUY NOW</span> </a>
   </div>
   </div>
      {/* end product iamage */}
         {/* for PRODUCT DETAILS */}
        <div className='lg:w-2/5 px-4'>
        <span className='text-slate-500 mb-3 block'>Home &gt Footwaer &gt Meva's &gt Casual Shoes &gt WoodLand </span>
       <h3 className='text-2xl text-slate-500'>{category}</h3>
       <span className='text-xl py-2 block'>{title}</span>
       <div className='py-3 flex'>
       <span  className='mx-2'><b className='flex items-center text-2xl'><FaRupeeSign/>{price}</b></span>
       <spna className='mx-2'><del>{Math.ceil((price*discountPercentage)/100) + price}</del></spna>
       <span className='mx-2 text-greenbase'><b>{discountPercentage}% off</b></span>
       </div>
<ProductStar starval = {rating} />
     <span className='text-xl font-semibold mt-3 block'>Product Details</span>
      <p className='text-md text-slate-600 mt-4 mb-4'>{description}
</p>
<div className='mt-3 mb-4'>
<div className='flex items-center py-4 flex-wrap border-b-2 border-slate-500'>
<HomeapiFetch/>
  </div>
</div>

<span className='block'>Avaiable: <b>In Stocks</b></span>
<span className='mt-2 block'>Brand : <b>{brand}</b></span>
<hr className='bg-slate-500 mb-5 h-1 mt-3'/>

      </div>
          {/* end PRODUCT DETAILS */}
   </div>
   </div>  :
      <div className='flex items-center h-screen justify-center animate-spin'>
      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-loader-quarter" width="54" height="54" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <line x1="12" y1="6" x2="12" y2="3" /> <line x1="6" y1="12" x2="3" y2="12" /> <line x1="7.75" y1="7.75" x2="5.6" y2="5.6" /> </svg> 
      </div>
  }
   </Fragment>
 
  )
}

export default Productdetail
