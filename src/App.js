import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Navbar from './component/Navbar';
import ProductList from './component/ProductList';
import Cart from './Cart/Cart';
import Details from  './component/Details';
import Model from './component/Model';
import Default from './component/Default';

function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
     <Route path='/' element={<ProductList/>}/>
     <Route path='/cart' element={<Cart/>}/>
     <Route path='/details' element={<Details/>}/>
     <Route path='*' element={<Default/>}/>
    </Routes>
    <Model/>
    </Router>
    </>
  );
}

export default App;
