import React, { Component } from 'react';
import GrayPants from './GrayPants';
import GrayShoes from './GrayShoes';
import GrayTshirt from './GrayTshirt';

class ProductList extends Component {
 
  render() {
    return (
      <div className="container main-content">
        <GrayTshirt/>
        <GrayPants/>
        <GrayShoes/>
      </div>
    );
  }
}

export default ProductList;