import Categorycom from './Categorycom'
import React,{Fragment} from 'react'
function Price() {
  const prices = [{name:'Under 199'},{name:'Under 599'},{name:'Under 659'},{name:'Under 699'},{name:'Under 799'}]
  return (
    <Fragment>
   <div className='border-y-4 border-slate-200 '>
   <div className='py-4'>
   <Categorycom name ='Price' dataapi = {prices} />
 </div>
  </div>
    </Fragment>
  )
}

export default Price