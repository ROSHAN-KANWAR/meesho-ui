import React ,{Fragment} from 'react';
import './App.css';
import Header from './Layouts/Header';
import Home from './Components/Home'
import Product from './Product/Product'
function App() {

  return (
    <Fragment>
    <Header />
    <Home/>
    <Product/>
  </Fragment>
   );

}

export default App;
