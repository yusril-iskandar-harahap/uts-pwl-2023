import React from 'react';
import pants from './pants.png';

const GrayPants = () => {
  return (
    <div className="row product">
      <div className="col-md-2">
        <img src={pants} alt="" height="150" />
      </div>
      <div className="col-md-8 product-detail">
        <h4>Gray Pants</h4>
        <p>Celana casual warna abu-abu.</p>
        <h4>Harga : Rp. 130.000</h4>
        <button type="button" class="btn btn-info">Tambah Keranjang +</button>
      </div>
      <div className="col-md-2 product-price">
        <h4>Stok : 5</h4>
        <button type="button" class="btn btn-danger">Delete</button>
        <br></br>
        <button type="button" class="btn btn-info">Update</button>
      </div>
    </div>
  );
}

export default GrayPants;