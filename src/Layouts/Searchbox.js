import React from 'react'
import { Fragment,useState } from 'react'
import {useNavigate} from 'react-router-dom';

function Searchbox() {
  const [term, setterm] = useState("")
  const navigate= useNavigate();
const Hands=(e)=>{
 e.preventDefault();
  navigate(`product-search/search=/${term}`)
  setterm("")
}
  return (
    <Fragment>
    <div className=" logo md:mt-0 sm:mt-5 mt-5 flex md:flex-row sm:flex-col flex-col justify-content-start items-center lg:w-4/4 ">
  <form  onSubmit={Hands} className = "md:mx-12 searchbox flex  items-center bg-white  border border-indigo-200  rounded-1  lg:w-3/5 md:w-full sm:w-full w-full">
  <div className='lg:w-full md:w-full sm:w-full w-full'>
  <input type="search"  required  onChange={(e)=>setterm(e.target.value)} value={term}  className='px-4 py-2 outline outline-offset-0 outline-0 w-full input-field' placeholder='Try Jeans,underwear or Search By Product name' />
  </div>
  <button type="submit" className='border-l-2 border-slate-500 px-3 py-2'>
  <i className="d-block">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
  </svg>
  </i>
  </button>
  </form>
    
      </div> 
      
    </Fragment>
  )
}

export default Searchbox