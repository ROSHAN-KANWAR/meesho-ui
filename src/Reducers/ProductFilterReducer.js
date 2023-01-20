
const ProductFilterReducer = (state,action) => {
	switch(action.type){
		//get all data
		case "LOADING_API_DATA":
		return{
			...state,
			isLoading:true,
		};
	   
	    case "FAILED_API_DATA":
	     return{
			...state,
			isError:true,
			isLoading:false,
		};
		case "FETCH_API_DATA":
          return{
          	...state,
          	isLoading:false,
          	Searchproducts:action.payload
          }
          //get single data
        
          //get all data
		case "LOADING_API_DATA_Category":
		return{
			...state,
			CisLoading:true,
		};
	   
	    case "FAILED_API_DATA_Category":
	     return{
			...state,
			CisError:true,
			CisLoading:false,
		};
		case "FETCH_API_DATA_Category":
          return{
          	...state,
          	CisLoading:false,
          	Cateproducts:action.payload
          }
        default:
        return state

   }

};

export default ProductFilterReducer