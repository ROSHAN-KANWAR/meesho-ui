import React, { Fragment,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Product from '../Product/Product'

import { useProductFilter } from '../Context/ProductFilterContext'

function ProductList() {
 const{category} = useParams();
 const {Cateproducts,Categoryproductapis}= useProductFilter();
  useEffect(()=>{
   Categoryproductapis(`https://dummyjson.com/products/category/${category}`);
  })
 
  return (
    <>
   
 <div className="py-12">
    <Product foryou = {category} product={Cateproducts}/>
    </div>
   
   
 </>
  )
}

export default ProductList