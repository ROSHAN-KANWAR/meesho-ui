
const CardReducer = (state,action) => {
	
	if (action.type === "cart_to_cart"){
		const{id,price,brand,thumbnail,title} = action.payload
	console.log(action.payload.title)
	
	let cardproduct;
	cardproduct={
		id:id,
		brand:brand,
		price:price,
		thumbnail:thumbnail,
		title:title,
	};
	return{
		...state,
		cart:[...state.cart ,cardproduct],
	};

     }

						if (action.type === "cart_to_remove"){
							
								let removesitem  = state.cart.filter((ele)=>{
									return ele.id !== action.payload
								})
							return{
								...state,
								cart:removesitem,
							};

						}
  return state;

};

export default CardReducer