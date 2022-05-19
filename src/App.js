import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Login from './component/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Register from './component/Register';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      
      <Route path="/" exact element={<Login/>}/>
      <Route path="/register" exact element={<Register/>}/>

     

      

     
   
   

    </Routes>
    </BrowserRouter>
  
  );
}

export default App;
