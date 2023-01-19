import {createContext, useContext,useEffect,useReducer} from 'react'
import axios from 'axios';
import reducer from '../Reducers/Productreducer'
//initialstate value
const initialState = {
    isLoading:false,
    isError:false,
    products:[],
    isSingleLoading:false,
    isSingleError:false,
    Singleproducts:{},
}
//createcontext data
const AppContext = createContext();
//base url for product
const baseurl = "https://dummyjson.com/products";

//global context api
const AppProvider=({children})=>{
//create use reducer
const [state, dispatch] = useReducer(reducer, initialState)

//getproduct api fetch the data
const Getproductapis= async (url)=>{
     dispatch({type:"LOADING_API_DATA"})
    try{
const res = await axios.get(url);
    const products = res.data.products;
    dispatch({type:"FETCH_API_DATA",payload:products})
    }
    catch(error){
         dispatch({type:"FAILED_API_DATA"})
    }
    
}
//single product fetch by id
const Singleproductapis= async (url)=>{
     dispatch({type:"LOADING_API_DATA_SINGLE"})
    try{
const res = await axios.get(url);
    const singleproducts = res.data;
    dispatch({type:"FETCH_API_DATA_SINGLE",payload:singleproducts})
    }
    catch(error){
         dispatch({type:"FAILED_API_DATA_SINGLE"})
    }
    
}
useEffect(() => {
   Getproductapis(baseurl);
}, []);

    return (
        <AppContext.Provider value={{...state ,Singleproductapis}}>
    {children}
    </AppContext.Provider>
    );
};

// custom blobal hook
const GlobalProductContext=()=>{
    return useContext(AppContext);
}
export {AppProvider ,AppContext,GlobalProductContext}