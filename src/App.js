import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Login from './component/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Register from './component/Register';
import Bookdetails from './component/Bookdetails';
import Viewbook from './component/Viewbook';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      
      <Route path="/" exact element={<Login/>}/>
      <Route path="/register" exact element={<Register/>}/>
      <Route path="/add" exact element={<Bookdetails/>}/>
      <Route path="/view" exact element={<Viewbook/>}/>
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
