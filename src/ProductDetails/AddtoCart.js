import React,{Fragment} from 'react'
import { FaShoppingCart} from "react-icons/fa";
function AddtoCart({productval}) {
  console.log(productval[2])
	return (
		<Fragment>
    {productval[0]}
    {productval[1]}
			 <button  className='d-block lg:w-1/3 mx-2 py-2 font-semibold px-3 border border-slate-500 flex items-center justify-center hover:border-slate-800 hover:bg-slate-200'>
   <FaShoppingCart/>
   <span className='mx-2'>ADD TO CART</span>
   </button>
   {
    <img src={productval[2]} />
   }
		</Fragment>
	)
}

export default AddtoCart