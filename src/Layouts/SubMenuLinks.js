import React,{Fragment} from 'react'

function SubMenuLinks({submenu ,key}) {
  return (
   
    <div key={key} className='px-4 grid grid-cols-1 font-semibold text-greybase' style={{zIndex:9}}>
    <a href='#'><li className='py-3  hover:text-slate-600 mx-4'>{submenu.sname}</li></a>  
   <a href='#' ><li className='py-3 hover:text-slate-600 mx-4'>{submenu.sname1}</li></a>
   <a href='#'> <li className='py-3 hover:text-slate-600 mx-4'>{submenu.sname2}</li></a>
   <a href='#' ><li className='py-3 hover:text-slate-600 mx-4'>{submenu.sname3}</li></a>
   <a href='#' ><li className='py-3 hover:text-slate-600 mx-4'>{submenu.sname4}</li></a>
   <a href='#'> <li className='py-3 hover:text-slate-600 mx-4'>{submenu.sname5}</li></a>
   <a href='#'> <li className='py-3 hover:text-slate-600 mx-4'>{submenu.sname6}</li></a>

    </div>

  )
}

export default SubMenuLinks