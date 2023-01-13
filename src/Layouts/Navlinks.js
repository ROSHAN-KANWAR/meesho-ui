import React,{Fragment ,useState} from 'react'
import Searchbox from './Searchbox'

import { FaAlignRight,FaTimes } from "react-icons/fa";
function Navlinks() {
  
  const [Menuclick, setMenuclick] = useState(false)
  const [fix, setfix] = useState(false)

 const Setfixed=()=>{
  if(window.innerWidth<769){
    setfix(true)
  }
  else{
    setfix(false)
  }
}
window.addEventListener('resize' ,Setfixed)
  const links = [
    {name:'Women Ethnic',
    sublinks:[
      { sname:'topwears',
       sname1:'top war2',
       sname2:'top war2',
       sname3:'top war2',
       sname4:'top war2',}
    ]
  } ,
    {name:'Women Ethnic'},
    {name:'Women Ethnic',
    sublinks:[
      { sname:'topwears',
       sname1:'top war2'}
    ]
  },
  {name:'Women Ethnic'},
  {name:'Women Ethnic'},
  {name:'Women Ethnic',
  sublinks:[
    { sname:'topwears',
     sname1:'top war2'}
  ]
},
{name:'Women Ethnic'},
{name:'Women Ethnic',
sublinks:[
  { sname:'topwears',
   sname1:'top war2'}
]
},
]
  return (
  <Fragment>

  <div className={Menuclick? 'block container-xl mx-auto md:px-16 px-2 py-3 border-b-2 border-slate-300': 'md:block hidden  container-xl mx-auto md:px-16 px-2 py-3 border-b-2 border-slate-300'}>
  <div>
  
  <nav className='flex md:flex-row sm:flex-col flex-col justify-center w-full '>
{
  links.map((ele,index)=>{
return(
  <div className='px-6 py-2  group' key={index}>
<a href='#' >{ele.name}</a>
{ele.sublinks && 
  <ul className={fix ?'navlinks bg-white border shadow-md rounded-md border-slate-200 py-8 top-30 hidden group-hover:block' : 'absolute w-full bg-white border shadow-md rounded-md border-slate-200 py-8 top-30 hidden group-hover:block' }>
 {ele.sublinks.map((old ,ind)=>{
  return(
    <div className='px-12 grid grid-cols-2' style={{zIndex:9}} key={ind}>
    <a href='#'><li className='py-3 '>{old.sname}</li></a>  
 <a href='#' ><li className='py-3'>{old.sname1}</li></a>
   <a href='#'> <li className='py-3'>{old.sname2}</li></a>
   <a href='#' ><li className='py-3'>{old.sname3}</li></a>
   <a href='#' ><li className='py-3'>{old.sname4}</li></a>
    </div>
  )
 })}
  </ul>
}
</div>
)
  })
}

</nav>
  </div>
  </div>
  <div className='flex justify-end absolute top-4 right-1 mx-2 md:hidden'>
  <span onClick={()=>setMenuclick(!Menuclick)} className="cursor-pointer  text-2xl text-pinkbase md:px-1 sm:px-2 px-2">{Menuclick? <FaTimes/>: <FaAlignRight/>}  </span>
  </div>
  <div className='md:hidden block px-4'>
  <Searchbox/>
  </div>
  
  </Fragment>
  )
}

export default Navlinks