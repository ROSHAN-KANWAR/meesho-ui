import {createContext, useContext,useEffect,useReducer} from 'react'
import axios from 'axios';
import reducer from '../Reducers/ProductFilterReducer'
//initialstate value
const initialState = {
    isLoading:false,
    isError:false,
    Searchproducts:[],
     CisLoading:false,
    CisError:false,
    Cateproducts:[],
    
}
//createcontext data
const FilterContext = createContext();

//global context api
const FilterProvider=({children})=>{
//create use reducer
const [state, dispatch] = useReducer(reducer, initialState)

//getproduct api fetch the data
const Searchproductapis= async (url)=>{
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
//category wise
const Categoryproductapis= async (url)=>{
     dispatch({type:"LOADING_API_DATA_Category"})
    try{
const res = await axios.get(url);
    const products = res.data.products;
    dispatch({type:"FETCH_API_DATA_Category",payload:products})
    }
    catch(error){
         dispatch({type:"FAILED_API_DATA_Category"})
    }
    
}

    return (
        <FilterContext.Provider value={{...state ,Searchproductapis,Categoryproductapis}}>
    {children}
    </FilterContext.Provider>
    );
};

// custom blobal hook
const useProductFilter=()=>{
    return useContext(FilterContext);
}
export {FilterProvider ,FilterContext,useProductFilter}