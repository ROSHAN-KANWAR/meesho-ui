import React from 'react'
import {FaStar ,FaStarHalfAlt} from 'react-icons/fa'
import {AiOutlineStar} from 'react-icons/ai'
function ProductStar({starval}) {
   const rat = Array.from({length:5} ,(ele ,index)=>{
    let num = index+ 0.5
    return(
        <span key ={index}>
        {starval >=index+1 ?(
            <FaStar className='text-pinkbase'/>
        ):starval>=num?(
            <FaStarHalfAlt className='text-pinkbase'/>):
            (<AiOutlineStar className='text-pinkbase'/>)
    }
        
        </span>
    )
});
return (
    
    <span className='flex items-center mx-2'>{rat} <b className='mx-2 text-slate-400'>Customer Review</b></span>
   
)
}

export default ProductStar