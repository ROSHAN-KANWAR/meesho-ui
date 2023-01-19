
const CardReducer = (state,action) => {
	
	if (action.type === "cart_to_cart"){
		const{id,price,brand,thumbnail,title} = action.payload
	
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
  return state;

};

export default CardReducer