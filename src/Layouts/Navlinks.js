import React,{Fragment ,useState} from 'react'
import Searchbox from './Searchbox'
import { FaAlignRight,FaTimes } from "react-icons/fa";
import SubMenuLinks from './SubMenuLinks'
import { Link} from 'react-router-dom';
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
    {name:'Smartphones',
    sublinks:[
      {Heads:'View All',
       Submenu:[
        { sname:'Sumsung',
        sname1:'Nokia',
        sname2:'Oppo',
        sname3:'Xiaomi',
        sname4:'Oneplus',
        sname5:'Vivo',
        sname6:'Motorola',}
       ]}]} ,
  {name:'Laptops',
  sublinks:[
    {Heads:'View All',
    Submenu:[
      {   sname:'Lenevo',
      sname1:'Acer',
      sname2:'Asus',
      sname3:'Macbook',
      sname4:'Dell',
      sname5:'Apple',
      sname6:'Hp',}
     ]} ]
} ,
{name:'Fragrances',
  sublinks:[
    {Heads:'View All',
    Submenu:[
      {   sname:'Lavender',
      sname1:'Chanel'}
     ]} ]
} ,
{name:'Motorcycle',
  sublinks:[
    {Heads:'View All',} ]
} ,
{name:'Mens-shirts',
  sublinks:[
    {Heads:'View All',} ]
} ,
{name:'Skincare',
  sublinks:[
    {Heads:'View All',
    Submenu:[
      { sname:'CeraVe',
      sname1:'Cleaner',
     sname2:'Toner',}
     ]} ]
} ,
{name:'Lighting',
  sublinks:[
    {Heads:'View All',
  } ]
} ,

{name:'Womens-dresses',
  sublinks:[
    {Heads:'View All',
  } ]
} ,
{name:'Sunglasses',
  sublinks:[
    {Heads:'View All',
    Submenu:[
      {   sname:'Indian',
      sname1:'Western',
    sname2:'Banarasi',
  sname3:'Kerala'}
     ]} ]
} ,
  ]

  return (
  <Fragment>

  <div className={Menuclick? 'block container-xl mx-auto md:px-16 px-2 py-3 border-b-2 border-slate-300': 'md:block hidden  container-xl mx-auto md:px-16 px-2 py-3 border-b-2 border-slate-300'}>
  <div>
  
  <nav className='flex md:flex-row sm:flex-col overflow-auto flex-col justify-center w-full '>
{
  links.map((ele,index)=>{
return(
  <div className='px-6 pt-6  pb-0 group' key={index}>
<span  className="cursor-pointer font-semibold text-slate-800 hover:text-pinkbase hover:font-bold"  >{ele.name}</span>
{ele.sublinks && 
  <ul className={fix ?'navlinks bg-white border shadow-md rounded-md border-slate-200 py-8 top-30 hidden group-hover:block' : 'absolute w-auto bg-white border shadow-md rounded-md border-slate-200 py-12 top-31 hidden group-hover:block' }>
 {ele.sublinks.map((old ,ind)=>{
  return(
    <Fragment>
   <Link to={`/product-list/${ele.name}`} key={ind} onClick={()=>setMenuclick(!Menuclick)}><li  className="py-2 bg-slate-200 px-4">{old.Heads}</li></Link> 
    {old.Submenu && <div>
{
  old.Submenu.map((submenu,index)=>{
    return(
    <SubMenuLinks Menuclick = {Menuclick} setMenuclick ={setMenuclick} submenu = {submenu} key = {index}/>
    )
  })
}
</div>
    }
    </Fragment>
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