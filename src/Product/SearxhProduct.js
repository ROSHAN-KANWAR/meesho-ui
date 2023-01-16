import React, { Fragment,useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Product from './Product.js'
export default function SearxhProduct() {
  const {search} = useParams();
  const [product,Setproduct] = useState([]) 
  const [states, setStates] = useState(false)
   const [Not, setNot] = useState("")
  const Fetchs = async()=>{
    try{
      const res = await axios.get(`https://dummyjson.com/products/search?q=${search}`);
      Setproduct(res.data.products)
      setStates(true)
      if(res.data.products.length ===0){
          setStates(false)
          setNot("Not Found ! Try Again ")
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
      :<h5 className="text-center mt-5 text-red-500 text-3xl">Wait for fetch...{Not}</h5>}
   
 </>
  )
}
