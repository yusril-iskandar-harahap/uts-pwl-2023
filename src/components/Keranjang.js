import Navigasi from "../global/Navigasi";
import "./DaftarProduk.css";
import tshirt from '../components/produkComponents/t-shirt.jpg';

function Keranjang() {

    
  return (

    <div className="App">
      <Navigasi/>
      <h1>=====</h1>
      <h1>=====</h1>
      <h1>KERANJANG</h1>
      <h1>=====</h1>
      <div className="row product">
      <div className="col-md-2">
        <img src={tshirt} alt="" height="150" />
      </div>
      <div className="col-md-8 product-detail">
        <h4>Gray T-Shirt</h4>
        <p>Baju kaos casual warna abu-abu.</p>
        <h4>Harga : Rp. 130.000</h4>
      </div>
      <div className="col-md-2 product-price">
        <h4>Jumlah : 1</h4>
        <button type="button" class="btn btn-info">+</button>
        <br></br>
        <button type="button" class="btn btn-danger">-</button>
      </div>
    </div>
    </div>
  );
  }
  
  export default Keranjang;