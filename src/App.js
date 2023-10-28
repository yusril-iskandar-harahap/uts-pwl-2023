import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Beranda from './components/Beranda';
import ABOUT from './components/About';
import NotFound from './components/NotFound';
import Tambah from './components/Tambah';
import Keranjang from './components/Keranjang';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Beranda/>}/>
          <Route path='/About' element={<ABOUT/>}/>
          <Route path='/Tambah' element={<Tambah/>}/>
          <Route path='/Keranjang' element={<Keranjang/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
