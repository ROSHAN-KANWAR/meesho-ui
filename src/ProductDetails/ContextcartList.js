import React,{Fragment} from 'react'
import MainImg from '../Photo/MainImg.webp'
import {useCardContext } from '../Context/CardContext'
const ContextcartList = () => {
  const {cart}=useCardContext();
  console.log(cart)
  
  return (
		<Fragment>	
		 <div class="container p-8 mx-auto mt-6 bg-white">
      <div class="w-full overflow-x-auto">
        <div class="my-2">
          <h3 class="text-xl font-bold tracking-wider">Shopping Cart {cart.length} item</h3>
          </div>
        <table class="w-full shadow-inner" >
          <thead>
            <tr class="bg-gray-100">
              <th class="px-6 py-3 font-bold whitespace-nowrap">Product</th>
               <th class="px-6 py-3 font-bold whitespace-nowrap">Brand</th>
              <th class="px-6 py-3 font-bold whitespace-nowrap">Qty</th>
              <th class="px-6 py-3 font-bold whitespace-nowrap">Price</th>
              <th class="px-6 py-3 font-bold whitespace-nowrap">Remove</th>
            </tr>
          </thead>
          <tbody>

{
  cart.map((e,index)=>{
    return(
 <tr key={index}>
              <td class="p-4 px-6 text-center whitespace-nowrap flex items-center">
             <img src={cart[index].thumbnail} className="w-12 h-12" alt="cart details "/>
            <span className="mx-2">{cart[index].title}</span>
              </td>
             <td class="p-4 px-6 text-center whitespace-nowrap">{cart[index].brand}</td>
             
              <td class="p-4 px-6 text-center whitespace-nowrap">
                <div>
                  <button class="px-2 py-0 shadow">-</button>
                  <input
                    type="text"
                    name="qty"
                    value="1"
                    class="w-12 text-center bg-gray-100 outline-none"
                  />
                  <button class="px-2 py-0 shadow">+</button>
                </div>
              </td>
              <td class="p-4 px-6 text-center whitespace-nowrap">{cart[index].price}</td>
              <td class="p-4 px-6 text-center whitespace-nowrap">
                 <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6 text-red-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>
              </td>
            </tr>
           

      )
  })
}

           

          </tbody>
        </table>
        <div class="flex justify-end mt-4 space-x-2">
          <button
            class="
            px-6
              py-3
              text-sm text-gray-800
              bg-gray-200
              hover:bg-gray-400
            "
          >
            Cannel
          </button>
          <button
            class="
              px-6
              py-3
              text-sm text-white
              bg-pinkbase
              hover:bg-pink-500
            "
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
    
		</Fragment>
	)
}

export default ContextcartList