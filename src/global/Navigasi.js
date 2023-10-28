import { useNavigate } from "react-router-dom";
import "./Navigasi.css"

export default function Navigasi() {
    const navigate = useNavigate()

    return(
        <nav className='nav'>
            <ul>
                <li onClick={() => navigate('/')}>BERANDA</li>
                <li onClick={() => navigate('/About')}>ABOUT</li>
                <li onClick={() => navigate('/Tambah')}></li>
                <li onClick={() => navigate('/Keranjang')}></li>
            </ul>
        </nav>
    );
}