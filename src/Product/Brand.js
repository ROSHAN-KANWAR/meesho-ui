
import React,{Fragment} from 'react'
import Categorycom from './Categorycom'

function Gender({value}) {
  const gender = [{name:'Apple'},
  {name:'Samsung'},
  {name:'OPPO'},
  {name:'Dry Rose'},
  {name:'Baking Food Items'},
  {name:'Golden'},
  {name:'Al Munakh'},
  {name:'Royal_Mirage'},
  {name:'HP Pavilion'},
  {name:'Infinix'},
  {name:'Microsoft Surface'},
  {name:'Huawei'},
  {name:'ROREC White Rice'},
  {name:'Fair & Clear'},
  {name:'Saaf & Khaas'},
  {name:'Dermive'},
]
  return (
   <Fragment>
   <div className='border-b-4 border-slate-200 '>
   <div className='py-4'>
   <Categorycom name ='Brand' dataapi={gender}/>
  
 </div>
  </div>
   
   </Fragment>
  )
}

export default Gender