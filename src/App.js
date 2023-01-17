import React ,{Fragment} from 'react';
import './App.css';
import Header from './Layouts/Header';
import Home from './Components/Home'
import { BrowserRouter as Router ,Routes , Route} from 'react-router-dom';
import Productdetail from './ProductDetails/Productdetail';
import ProductList from './ProductDetails/ProductList';
import SearxhProduct from './Product/SearxhProduct'
import AddtocartList from './ProductDetails/AddtocartList'
function App() {

  return (
    <Fragment>
    <Router basename ='/meesho-ui'>
    <Header />
    <Routes>
    <Route exact  path="/" element={<Home/>} />
    <Route exact path='/product-detail/:id/:brand/:category/:title' element={<Productdetail/>} />
    <Route exact path="/product-list/:category" element={<ProductList/>} /> 
    <Route exact path="product-search/search=/:search" element={<SearxhProduct/>} /> 
     <Route exact  path="/add-cart-list" element={<AddtocartList/>} />
    </Routes>
    </Router>

  </Fragment>
   );

}

export default App;
