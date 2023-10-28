import Footer from "../global/Footer";
import Navigasi from "../global/Navigasi";
import ProductList from "./produkComponents/PruductList";
import { useNavigate } from "react-router-dom";
import "./DaftarProduk.css";

function Beranda() {

  const navigate = useNavigate()
    
  return (

    <div className="App">
      <Navigasi/>
      <h1>=====</h1>
      <h1>=====</h1>
      <h1>Beranda</h1>
      <h1>=====</h1>
      <div>
          <button onClick={() => navigate('/Tambah')} type="button" class="btn btn-primary" >Tambah +</button>
          <button onClick={() => navigate('/Keranjang')} type="button" class="btn btn-warning">Keranjang</button>
      </div>
      <ProductList/>
      <Footer/>
    </div>
  );
  }
  
  export default Beranda;