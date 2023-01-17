import React,{Fragment} from 'react'
import { FaShoppingCart} from "react-icons/fa";

import {useNavigate} from 'react-router-dom';

function AddtoCart({productval}) {
	const navigate= useNavigate();
  console.log(productval[2])
  const Hands=(e)=>{
  navigate(`/add-cart-list`)
 

}
	return (
		<Fragment>
    {productval[0]}
    {productval[1]}
			 <button onClick={Hands} className='d-block lg:w-1/3 mx-2 py-2 font-semibold px-3 border border-slate-500 flex items-center justify-center hover:border-slate-800 hover:bg-slate-200'>
   <FaShoppingCart/>
   <span className='mx-2'>ADD TO CART</span>
   </button>
		</Fragment>
	)
}

export default AddtoCart