import React, { Fragment,useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Product from '../Product/Product'
import axios from 'axios';
function ProductList() {
 const{category} = useParams();
  const [product,Setproduct] = useState([]) 
  const [states, setStates] = useState(false)
  const [Not, setNot] = useState("")
  const Fetchs = async()=>{
    try{
      const res = await axios.get(`https://dummyjson.com/products/category/${category}`);
      Setproduct(res.data.products)
      setStates(true)
      if(res.data.products.length ===0){
          setStates(false)
          setNot("Not Found")
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
    <Product foryou = {category} product={product}/>
    </div>
      :<h5>wait for....{Not}</h5>}
   
 </>
  )
}

export default ProductList