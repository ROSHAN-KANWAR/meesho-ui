import {createContext, useContext,useEffect,useReducer} from 'react'
import axios from 'axios';
import reducer from '../Reducers/CardReducer'
//initialstate value
const initialState = {
    cart:[],
    total :"",
    amount:"",
    ship:400,
    
}
//createcontext data
const Card_Context = createContext();

//global context api
const Card_Provider=({children})=>{
    const [state, dispatch] = useReducer(reducer, initialState)
const Cartadd =(id,price ,brand,thumbnail,title)=>{
 dispatch({type:"cart_to_cart" ,payload:{id,price,brand,thumbnail,title}})
}
    return (
        <Card_Context.Provider value={{...state,Cartadd}}>
    {children}
    </Card_Context.Provider>
    );
};

// custom blobal hook
const useCardContext=()=>{
    return useContext(Card_Context);
}
export {Card_Provider,useCardContext}