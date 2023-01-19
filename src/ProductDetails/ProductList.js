import React, { Fragment,useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Product from '../Product/Product'

import { useProductFilter } from '../Context/ProductFilterContext'
import axios from 'axios';
function ProductList() {
 const{category} = useParams();
 const {Cateproducts, CisLoading,Categoryproductapis}= useProductFilter();
  useEffect(()=>{
   Categoryproductapis(`https://dummyjson.com/products/category/${category}`);
  },[Cateproducts])

  return (
    <>
   
 <div className="py-12">
    <Product foryou = {category} product={Cateproducts}/>
    </div>
   
   
 </>
  )
}

export default ProductList