import React,{Fragment} from 'react'
import { FaShoppingCart} from "react-icons/fa";
import {useCardContext } from '../Context/CardContext'
import {NavLink} from 'react-router-dom';

function AddtoCart({productval}) {
	 const {Cartadd}=useCardContext();
	 const{id,price ,brand,thumbnail,title} = productval
	return (
		<Fragment>
			 <NavLink to="/add-cart-list" onClick={()=>Cartadd(id,price,brand,thumbnail,title)} className='d-block lg:w-1/3 mx-2 py-2 font-semibold px-3 border border-slate-500 flex items-center justify-center hover:border-slate-800 hover:bg-slate-200'>
   <FaShoppingCart/>
   <span className='mx-2'>ADD TO CART</span>
   </NavLink>
		</Fragment>
	)
}

export default AddtoCart