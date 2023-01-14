import React, { Fragment ,useState} from 'react'
import { FaChevronUp, FaChevronDown} from "react-icons/fa";
function Categorycom({name,dataapi}) {
    
  const [first, setfirst] = useState(false)
  return (
  <Fragment>
  <div className='flex justify-between items-center' >
   <span className='d-block text-slate-800' style={{fontSize:'20px' ,fontWeight:'bold'}}>{name}</span>
   <div class="cursor-pointer">
       <span onClick={()=>{setfirst(!first)}}>{first?<FaChevronDown/> :<FaChevronUp/>}</span>
     </div>
   </div>
   { first &&  <div className='py-2'>
   <div class=" flex flex-wrap py-2 relative">
   {
    dataapi.map((ele)=>{
   return(
    <>
    <span className='px-3 py-1 border border-slate-400 m-2 rounded-sm'>{ele.name}</span>

    </>
   )
    })
   }
 
  </div>
 </div>
}
  </Fragment>
  )
}

export default Categorycom