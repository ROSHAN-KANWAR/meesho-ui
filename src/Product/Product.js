import React, { Fragment} from 'react';
import Sortfilter from './Sortfilter';
import ProductFetch from './ProductFetch';
function Product({foryou,product}) {
  
  return (
  <Fragment> 
 <div className='max-w-7xl mx-auto'>
<span className='px-2 text-3xl font-bold block mb-3'>Product For {foryou}</span>
 <div className='flex flex-wrap px-'>
  <div className='lg:w-1/4 w-full px-2'>
  <Sortfilter/>
  </div>
  <div className='lg:w-3/4  w-full'>
    <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  gap-4 lg:px-0 px-6">
    {
      product.map((e ,index)=>{
        return(
          <ProductFetch value = {e} keys={index}/>
    )
  })
}
    </div>
    </div>
  </div>
  </div>
  </Fragment>
  )
}

export default Product