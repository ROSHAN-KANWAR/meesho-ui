
const Productreducer = (state,action) => {
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
          	isLoading:true,
          	products:action.payload
          }
          //get single data
          case "LOADING_API_DATA_SINGLE":
		return{
			...state,
			isSingleLoading:true,
		};
	   
	    case "FAILED_API_DATA_SINGLE":
	     return{
			...state,
			isSingleError:true,
			isSingleLoading:false,
		};
		case "FETCH_API_DATA_SINGLE":
          return{
          	...state,
          	isSingleLoading:true,
          	Singleproducts:action.payload
          }
          //get all data
          
        default:
        return state

   }

};

export default Productreducer