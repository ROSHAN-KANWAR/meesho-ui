import React ,{Fragment} from 'react';
import './App.css';
import Header from './Layouts/Header';
import Home from './Components/Home'
import {Routes ,Route ,HashRouter as Router} from 'react-router-dom';
import Productdetail from './ProductDetails/Productdetail';
import ProductList from './ProductDetails/ProductList';
import SearxhProduct from './Product/SearxhProduct'
import AddtocartList from './ProductDetails/AddtocartList'
import Error from './Error'
function App() {
  return (
    <Fragment>
    <Router>
    <Header/>
    <Routes>
    <Route exact  path="/" element={<Home/>} />
    <Route exact path='/product-detail/:id/:brand/:category/:title' element={<Productdetail/>} />
    <Route exact path="/product-list/:category" element={<ProductList/>} /> 
    <Route exact path="/product-search/search=/:search" element={<SearxhProduct/>} /> 
     <Route exact  path="/add-cart-list" element={<AddtocartList/>} />
     <Route exact  path="*" element={<Error/>} />
    </Routes>
</Router>
  </Fragment>
   );

}

export default App;
