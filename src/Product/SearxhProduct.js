import React, { Fragment,useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Product from './Product.js'
export default function SearxhProduct() {
  const {search} = useParams();
  const [product,Setproduct] = useState([]) 
  const [states, setStates] = useState(false)
   const [Not, setNot] = useState( <div className='flex items-center h-screen justify-center animate-spin'>
      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-loader-quarter" width="54" height="54" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <line x1="12" y1="6" x2="12" y2="3" /> <line x1="6" y1="12" x2="3" y2="12" /> <line x1="7.75" y1="7.75" x2="5.6" y2="5.6" /> </svg> 
      </div>)
  const Fetchs = async()=>{
    try{
      const res = await axios.get(`https://dummyjson.com/products/search?q=${search}`);
      Setproduct(res.data.products)
      if(res.data.products.length ===0){
          setStates(false)
          setNot(<p className="text-4xl bg-red-700 py-4 text-textwhite">Search Result Not Found</p>)
      }
      else{
        setStates(true)
      }
    }
    catch(error)
    {
  
        }
  }
  useEffect(()=>{
   Fetchs()
  })

  return (
    <>
    {states ?
 <div className="py-12">
    <Product foryou = {search} product={product}/>
    </div>
      :<h5 className="text-center mt-5 text-red-500 text-3xl">{Not}</h5>}
   
 </>
  )
}
