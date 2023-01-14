import Categorycom from './Categorycom'
import React,{Fragment} from 'react'
function Discount() {
  const Discount = [{name:'10% and above'},{name:'20% and above'},{name:'25% and above'},{name:'30% and above'},{name:'35% and above'}]
  return(
  <Fragment>
   <div className='border-y-4 border-slate-200 '>
   <div className='py-4'>
   <Categorycom name ='Discount' dataapi = {Discount} />
 </div>
  </div>
    </Fragment>
  )
}

export default Discount