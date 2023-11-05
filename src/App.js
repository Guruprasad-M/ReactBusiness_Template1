import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';


import { BrowserRouter as Router ,Route , Routes} from 'react-router-dom' ;
import Home from './Components/pages/Home';
import Services from './Components/pages/Services';
import SignUp from './Components/pages/SignUp';
import Products from './Components/pages/Products';
function App() {
  return (
    <Router>  <Navbar/> <Routes><Route path='/' exact Component={Home} /> 
    <Route path='/services' element={<Services/>}/>
    <Route  path='/products'  element={<Products/>}/>
    <Route path='/sign-up' element={<SignUp/>}/>
    </Routes></Router>
 
 
  );
}

export default App;
