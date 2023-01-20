import React, { Fragment,useEffect} from 'react'
import { useParams } from 'react-router-dom';

import { useProductFilter } from '../Context/ProductFilterContext'
import Product from './Product.js'
export default function SearxhProduct() {
  const{search} = useParams();
  
  const {Searchproducts,Searchproductapis}= useProductFilter()
  useEffect(()=>{
   Searchproductapis(`https://dummyjson.com/products/search?q=${search}`)
  },)
 
  if(!Searchproducts.length){
    return <h2>Search Not Found</h2>
  }
  return (
    <>
 <div className="py-12">
    <Product foryou = {search} product={Searchproducts}/>
    </div>
    
 </>
  )
}
