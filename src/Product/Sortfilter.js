import React from 'react'
import { Fragment} from 'react'
import Categoryfilter from './Categoryfilter'

function Sortfilter() {
  
  return (
    <Fragment>
    <div>
    <div className=''>
    <div className='rounded-md border border-slate-200 items-center py-2  flex px-2'>
    <span className='text-slate-700 lg:w-1/3'>Sort By :  </span>
    <div className="relative w-full lg:w-2/3">
    <select className="relativ  block outline outline-offset-0 bg-white outline-0 appearance-none w-full  py-2 px-4 pr-8 rounded " id="grid-state">
      <option>Recent</option>
      <option>Popular</option>
      <option>Rating</option>
      <option>low-to-high</option>
      <option>high-to-low</option>

    </select>
    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
    </div>
  </div>
   
    </div>
    </div>
    <div className='py-6'>
    <Categoryfilter/>
    </div>
    </div>
    </Fragment>
  )
}

export default Sortfilter