import {createContext, useContext,useReducer} from 'react'
import reducer from '../Reducers/CardReducer'
//initialstate value
// const getLocalData=()=>{
//    let newcart = localStorage.getItem("Meesho-cart");
//    if(newcart === []){
//     return [];
//    }
//    else{
//     return JSON.parse(newcart);
//    }
// }
const initialState = {
    cart:[],
    //cart: getLocalData(),
    total :"",
    amount:"",
    ship:400,
    
}
//createcontext data
const CardContext = createContext();

//global context api
const CardProvider=({children})=>{
    const [state, dispatch] = useReducer(reducer, initialState)

//card items
const Cartadd =(id,price ,brand,thumbnail,title)=>{
 dispatch({type:"cart_to_cart" ,payload:{id,price,brand,thumbnail,title}})
}
//cart item remove
const ItemRemover=(id)=>{
     dispatch({type:"cart_to_remove" ,payload:id})
}

//save item in local storage
// useEffect(()=>{
//     localStorage.setItem("Meesho-cart" ,JSON.stringify(state.cart))
// },[])
    return (
        <CardContext.Provider value={{...state,Cartadd ,ItemRemover}}>
    {children}
    </CardContext.Provider>
    );
};

// custom blobal hook
const useCardContext=()=>{
    return useContext(CardContext);
}
export {CardProvider,useCardContext}