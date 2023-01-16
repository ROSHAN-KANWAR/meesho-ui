import React ,{Fragment,useState} from 'react'

function Productimage({productimg}) {
const [Imagechange, setImagechange] = useState(0)
  return (
   <Fragment>
   <div>
   
<div className='flex justify-center '>
<img src={productimg[Imagechange]} loading='lazy' alt="roshan" className='h-64 border border-slate-200 mx-1' />   
</div>
<div className='grid grid-cols-5 py-4 gap-2 justify-center place-items-center  items-center  px-3'>
{
    productimg.map((curimg,index)=>{ 
        return(
            <figure>
            <img loading='lazy' src={curimg} onClick={()=>setImagechange(index)} alt="roshan" className='w-16 h-16 border border-slate-300 mx-1' key={index}/>   
         </figure>
        )
    })
}
</div>
   </div>
   
   </Fragment>
  )
}

export default Productimage