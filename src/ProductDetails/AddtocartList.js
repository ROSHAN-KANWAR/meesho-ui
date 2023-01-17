import React,{Fragment} from 'react'
import MainImg from '../Photo/MainImg.webp'
const AddtocartList = () => {
	return (
			<Fragment>
			 <div class="container p-8 mx-auto mt-6 bg-white">
      <div class="w-full overflow-x-auto">
        <div class="my-2">
          <h3 class="text-xl font-bold tracking-wider">Shopping Cart 3 item</h3>
        </div>
        <table class="w-full shadow-inner" >
          <thead>
            <tr class="bg-gray-100">
              <th class="px-6 py-3 font-bold whitespace-nowrap">Product</th>
              <th class="px-6 py-3 font-bold whitespace-nowrap">Qty</th>
              <th class="px-6 py-3 font-bold whitespace-nowrap">Price</th>
              <th class="px-6 py-3 font-bold whitespace-nowrap">Remove</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="p-4 px-6 text-center whitespace-nowrap flex items-center">
             <img src={MainImg} className="w-12 h-12"/>
            <span className="mx-2">Iphone 11</span>
              </td>
              <td class="p-4 px-6 text-center whitespace-nowrap">
                <div>
                  <button class="px-2 py-0 shadow">-</button>
                  <input
                    type="text"
                    name="qty"
                    value="2"
                    class="w-12 text-center bg-gray-100 outline-none"
                  />
                  <button class="px-2 py-0 shadow">+</button>
                </div>
              </td>
              <td class="p-4 px-6 text-center whitespace-nowrap">$1,000</td>
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
            <tr>
             <td class="p-4 px-6 text-center whitespace-nowrap flex items-center">
             <img src={MainImg} className="w-12 h-12"/>
            <span className="mx-2">Iphone 11</span>
              </td>
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
              <td class="p-4 px-6 text-center whitespace-nowrap">$12,00</td>
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
            <tr>
              <td class="p-4 px-6 text-center whitespace-nowrap flex items-center">
             <img src={MainImg} className="w-12 h-12"/>
            <span className="mx-2">Iphone 11</span>
              </td>
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
              <td class="p-4 px-6 text-center whitespace-nowrap">$1,300</td>
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
            <tr>
              <td class="p-4 px-6 text-center whitespace-nowrap"></td>
              <td class="p-4 px-6 text-center whitespace-nowrap">
                <div class="font-bold">Total Qty - 4</div>
              </td>
              <td class="p-4 px-6 font-extrabold text-center whitespace-nowrap">
                Total - 40,00 (include tax)
              </td>
              <td class="p-4 px-6 text-center whitespace-nowrap">
                <button class="px-4 py-1 text-red-600 bg-red-100">
                  Clear All
                </button>
              </td>
            </tr>
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

export default AddtocartList