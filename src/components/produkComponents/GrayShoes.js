import React from 'react';
import shoes from './shoe.jpg';

const GrayShoes = () => {
  return (
    <div className="row product">
      <div className="col-md-2">
        <img src={shoes} alt="" height="150" />
      </div>
      <div className="col-md-8 product-detail">
        <h4>Gray Shoes</h4>
        <p>Sepatu casual warna abu-abu.</p>
        <h4>Harga : Rp. 130.000</h4>
        <button type="button" class="btn btn-info">Tambah Keranjang +</button>
      </div>
      <div className="col-md-2 product-price">
        <h4>Stok : 3</h4>
        <button type="button" class="btn btn-danger">Delete</button>
        <br></br>
        <button type="button" class="btn btn-info">Update</button>
      </div>
    </div>
  );
}

export default GrayShoes;