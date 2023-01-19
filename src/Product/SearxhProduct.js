import React, { Fragment,useEffect} from 'react'
import { useParams } from 'react-router-dom';

import { useProductFilter } from '../Context/ProductFilterContext'
import Product from './Product.js'
export default function SearxhProduct() {
  const{search} = useParams();
  
  const {Searchproducts, isLoading,Searchproductapis}= useProductFilter()
  useEffect(()=>{
   Searchproductapis(`https://dummyjson.com/products/search?q=${search}`)
  },[])
  if( isLoading){
    return(
      <>
      <div className="flex items-center  h-2/3 justify-center w-2/3 animate-spin">
      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-loader-quarter" width="54" height="54" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> 
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <line x1="12" y1="6" x2="12" y2="3" /> <line x1="6" y1="12" x2="3" y2="12" /> <line x1="7.75" y1="7.75" x2="5.6" y2="5.6" /> </svg> 
      </div>
      </>)
  }
  return (
    <>
 <div className="py-12">
    <Product foryou = {search} product={Searchproducts}/>
    </div>
    
 </>
  )
}
