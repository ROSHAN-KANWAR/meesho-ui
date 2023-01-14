import React,{Fragment,useState, useContext} from 'react'
import Discount from './Discount'
import Brand from './Brand'
import Price from './Price'
import {ProductData} from './Product'
import { FaChevronUp, FaChevronDown} from "react-icons/fa";
function Categoryfilter() {
  const Categoryss = [
    {name:'smartphones'},
  {name:'laptops'},
  {name:'fragrances'},
  {name:'skincare'},
  {name:'groceries'},
  {name:'home-decoration'}
  ]
  
  const [Categorys]  = useContext(ProductData)
  //category
  const CategoryFil= []
  Categorys.map((e)=>{
   CategoryFil.push(e.brand)
  })
  const CategoryData = [...new Set(CategoryFil)]
  console.log(CategoryData)
    const [first, setfirst] = useState(true)
    const checkbox =[{name:'Bike Cover'},{name:'Bike Cover'},{name:'Bike Cover'},{name:'Bike Cover'},{name:'Bike Cover'},{name:'Bike Cover'},{name:'Bike Cover'},{name:'Bike Cover'},{name:'Bike Cover'},]
  return (
   <Fragment>
   <div className='border border-slate-200 rounded-md px-2'>
  <div className='px-2 py-3 border-b-4 border-slate-200'>
  <span className='text-slate-800' style={{fontSize:'20px' ,fontWeight:'bold'}}>Filters</span>
  <p className='text-slate-600'>1000+ product</p>
  </div>

  <div className='py-4 '>
  <div className='flex justify-between items-center py-2' >
  <span className='d-block text-slate-800' style={{fontSize:'20px' ,fontWeight:'bold'}}>Category</span>
  <div className="cursor-pointer">
      <span onClick={()=>{setfirst(!first)}}>{first?<FaChevronDown/> :<FaChevronUp/>}</span>
    </div>
  </div>
  { first &&  <div className='py-2'>
 <div className='py-2'>
 <div className = "rounded-sm searchbox flex justify-between items-center bg-white px-2 border border-slate-400  rounded-1 ">
 <i className="position-absolute  icon d-block">
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6">
   <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
 </svg>
 </i>
 <div className='lg:w-full'>
 <input type="text" className='px-4 py-2  outline outline-offset-0 outline-0 w-full input-field' placeholder='Search' />
 </div>
    </div>
 </div>
{
  Categoryss.map((ele ,index)=>{
    return(
      <div className="form-chec py-3 flex items-center" key={index}>
      <input className="h-4 w-4 mx-2" type="checkbox" value="" id="flexCheckChecked3"  />
      <label style={{fontSize:'18px'}} className="form-check-label inline-block text-gray-800 " htmlFor="flexCheckDefault3">
         {ele.name}
        </label>
    </div>
    )
  })
}
  </div>
}
<Price/>
<Brand/>
<Discount/>
</div>

 </div>
   </Fragment>
  )
}

export default Categoryfilter