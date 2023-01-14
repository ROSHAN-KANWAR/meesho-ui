import React,{Fragment} from 'react'

function ProductFetch({value,key}) {
  return (
    <Fragment>
    <div className="w-full  border border-slate-200" key={key}>
    <a className="block relative h-48 rounded overflow-hidden">
      <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={value.thumbnail} />
    </a>
    <div className="mt-4 p-4">
      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{value.title}</h3>
     <div className='flex py-3 items-center'>
      <b className='text-black mx-2 text-xl'>{value.price}</b> 
      <del>{Math.ceil((value.price*value.discountPercentage)/100) + value.price}</del>
      <b className='text-green-600 mx-2'>{value.discountPercentage}% off</b>
      </div>
      <p class="mt-1 bg-slate-200 px-2 py-1 text-xs rounded-full lg:w-1/2 md:w-full w-1/2">Free Delivery</p>
    <div className='py-3'>
    <h4>
    <span className='mt-3 mx-2 rounded-full bg-green-600 text-white px-4 py-1 text-md'>{value.rating} </span>
    Review</h4>
    </div>
    </div>
    </div>
    </Fragment>
  )
}

export default ProductFetch