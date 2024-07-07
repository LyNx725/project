import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import Dashboard from './components/dashboard';
import AddProduct from './components/addproduct';
import Footer from './components/footer';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
function App() {
  return (
    <>
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" Component={Dashboard}/>
        <Route path='/add-product' Component={AddProduct}/>
      </Routes>
    </Router>

    </>
  );
}

export default App;
