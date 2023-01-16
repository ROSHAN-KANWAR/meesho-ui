import React from 'react'

function SubMenuLinks({submenu ,keys,setMenuclick,Menuclick}) {
  return (
   
    <div key={keys} className='px-4 grid grid-cols-3 font-semibold text-greybase' style={{zIndex:9999999}}>
    <a href='/' aria-label='sub menu links' onClick={()=>setMenuclick(!Menuclick)}><li className='py-3  hover:text-slate-600 mx-4'>{submenu.sname}</li></a>  
   <a href='/' aria-label='sub menu links'  onClick={()=>setMenuclick(!Menuclick)}><li className='py-3 hover:text-slate-600 mx-4'>{submenu.sname1}</li></a>
   <a href='/' aria-label='sub menu links' onClick={()=>setMenuclick(!Menuclick)}> <li className='py-3 hover:text-slate-600 mx-4'>{submenu.sname2}</li></a>
   <a href='/' aria-label='sub menu links' onClick={()=>setMenuclick(!Menuclick)} ><li className='py-3 hover:text-slate-600 mx-4'>{submenu.sname3}</li></a>
   <a href='/' aria-label='sub menu links' onClick={()=>setMenuclick(!Menuclick)} ><li className='py-3 hover:text-slate-600 mx-4'>{submenu.sname4}</li></a>
   <a href='/' aria-label='sub menu links' onClick={()=>setMenuclick(!Menuclick)}> <li className='py-3 hover:text-slate-600 mx-4'>{submenu.sname5}</li></a>
   <a href='/' aria-label='sub menu links' onClick={()=>setMenuclick(!Menuclick)}> <li className='py-3 hover:text-slate-600 mx-4'>{submenu.sname6}</li></a>

    </div>

  )
}

export default SubMenuLinks