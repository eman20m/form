import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Link } from "react-router-dom";
import Routes from "./Routes";

function App() {
  const {
    count: { counter },
  } = useSelector((state) => state);

  const products = useSelector(state => state.products)
  const allProducts=Object.values(products)
  
  return (
    <Router>
      <nav className="p-1 font-weight-bold">
        <a className="m-1"><Link to="/">Home</Link></a>
        <a className="m-1"><Link to="/about">AboutUs</Link></a>
        <a className="m-1"><Link to="/contact">ContactUs</Link></a>
        <a className="m-5"><Link to="/navbar" className="text-danger">Counter {counter}</Link></a>
        <a className="m-1"><Link to="/product">Products {allProducts.length}</Link></a>
      </nav>
      <Routes/>
    </Router>
  );
}

export default App;
