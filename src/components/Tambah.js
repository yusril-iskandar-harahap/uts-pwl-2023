import { useState } from "react";
import ReactDOM from "react-dom/client";
import Navigasi from "../global/Navigasi";
import "./Tambah.css"

function Tambah() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }

  return (
    <div>
        <h1>=====</h1>
        <h1>=====</h1>
        <Navigasi/>
        <form onSubmit={handleSubmit}>
        <h1>Tambah Barang</h1>
        <label className="col-md-2">Nama Barang:
        <input 
            type="text" 
            name="username" 
            value={inputs.username || ""} 
            onChange={handleChange}
        />
        </label>
        <br></br>
        <label className="col-md-2">Tuliskan Harga:
            <input 
            type="text" 
            name="Harga" 
            value={inputs.Harga || ""} 
            onChange={handleChange}
            />
        </label>
          <br></br>
        <label className="col-md-2">Jumlah Stok:
            <input 
            type="number" 
            name="Stok" 
            value={inputs.Stok || ""} 
            onChange={handleChange}
            />
        </label>
        <br></br>
        <label className="col-md-2">Gambar:
            <input 
            type="file" 
            name="Gambar" 
            value={inputs.Gambar || ""} 
            onChange={handleChange}
            />
        </label>
        <br></br>
          <button type="button" class="btn btn-primary">Submit</button>
        </form>
        <h1>=====</h1>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Tambah />);

export default Tambah;