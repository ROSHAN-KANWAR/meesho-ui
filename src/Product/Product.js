import React, { Fragment,useState,useEffect, createContext } from 'react';
import Sortfilter from './Sortfilter';
import axios from 'axios';
import ProductFetch from './ProductFetch';
const ProductData = createContext()
function Product() {
  const [product,Setproduct] = useState([])
  
  const [Iserrors, seterrors] = useState("")
  const [Isloading, setIsloading] = useState(false)
  const Fetchs = async()=>{
    try{
      const res = axios("https://dummyjson.com/products");
      Setproduct((await res).data.products)
      setIsloading(true)
    }
    catch(error)
    {
   seterrors(error.message)
        }
  }
  useEffect(()=>{
   Fetchs()
  },[])
  return (
  <Fragment>
 <div className='flex flex-wrap px-4 max-w-8xl mx-auto'>
  <div className='lg:w-1/4 w-full px-4'>
<ProductData.Provider value={[product]}>
  <Sortfilter/>
  </ProductData.Provider>
  </div>

{Isloading ?

  <div className='lg:w-3/4  w-full'>
{Iserrors !== "" && <h2 className='text-2xl'>{Iserrors}</h2>}
    <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  gap-4 lg:px-0 px-6">
  
    {
      product.map((e ,index)=>{
        return(
          <ProductFetch value = {e} key={index}/>
    )
  })
}
    </div>
    </div>
: <h2>Data is Fetching from Server.....</h2>
}

  </div>
  </Fragment>
  )
}

export default Product
export {ProductData}