import React from 'react';
import { Router } from '@reach/router';
import { Link } from 'gatsby';
import Products from '../components/products';

const App = () => (
  <>
    sample
    <Link to="/product/testjal">Klik</Link>
    <Router basepath="/product">
      <Products path="/testjal" />
    </Router>
  </>
);
export default App;
