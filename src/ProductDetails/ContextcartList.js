import React,{Fragment} from 'react'
import {useCardContext } from '../Context/CardContext'
import {FaRupeeSign} from "react-icons/fa";
const ContextcartList = () => {
  const {cart ,ItemRemover}=useCardContext();

  return (
		<Fragment>	
		 <div class="container lg:px-8 md:px-4 sm:px-2 px-2  mx-auto  bg-slate-50">
      <div class="w-full overflow-x-auto">
        <div class="my-2 mt-3">
          <h3 class="text-xl font-bold tracking-wider">Shopping Cart {cart.length} item</h3>
          </div>

<div className='flex md:flex-row flex-col'>
{/*  shopping cart details    */}
<div className='flex py-4 flex-col lg:w-2/3 md:w-full w-full px-4'>
{/*  shopping cart images with details    */}

{
  cart.map((e,index)=>{
    const {id} = e
    return(
    <div key={index} className='flex flex-col border  bg-white border-slate-300 w-full px-3'>
     <div className='flex flex-row mt-3 py-3'>
     <div className='mx-3'>
     <img src={cart[index].thumbnail} alt ="rohsna" className='w-32 h-32'/>
     </div>
     <div className='mx-3'>
     <span className='block text-2xl font-semibold'>{cart[index].title}</span>
     <span className='block text-md py-2 flex items-center'><FaRupeeSign/>{cart[index].price}</span>
     <span className='block py-2'>Brand: <b>{cart[index].brand}</b></span>
     </div>
     </div>

        {/*  shopping cart images with details    */}
<div className='flex items-center border-t-2 border-slate-400'>
<div className='py-6 mx-4'>
<button class="px-2 py-0 shadow">-</button>
<input
  type="text"
  name="qty"
  value="1"
  class="w-12 text-center bg-gray-100 outline-none"
/>
<button class="px-2 py-0 shadow">+</button>
</div>
<div className='mx-4'>
<button onClick = {()=>ItemRemover(id)} className='flex items-center'>
<svg
  xmlns="http://www.w3.org/2000/svg"
  class="w-6 h-6 text-red-400"
  fill="none"
  viewBox="0 0 24 24"
  stroke="currentColor"
>
  <path
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
  />
</svg>Remove
</button>
</div>
</div>

</div>

)
})
}

</div>


{/*  shopping cart details    */}
<div className='lg:w-1/3   bg-white px-3 py-3'>
<div>
<span className='block text-2xl font-semibold border-b-2 border-slate-400 py-3'>Price details </span>
<span className=' flex py-4 items-center justify-between'>Place (2 items) :<p>2023</p></span>
<span className=' flex py-4 items-center justify-between'>Delivery Charge :<p className='text-greenbase'>FREE</p></span>
<div className='border-y-2 border-slate-300 py-4 px-2'>
<span className='text-2xl font-bold flex justify-between items-center'>Total Amount : <b className='text-xl'>3090</b></span>
</div>
<div className='px-3 flex justify-end mt-4'>
<button className='px-4 py-2 bg-pinkbase text-white font-semibold text-xl rounded-md'>Place Order</button>
</div>
</div>

</div>

</div>



      </div>
    </div>
    
		</Fragment>
	)
}

export default ContextcartList