import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Narvar from './components/Narvar';
import Home from './components/Home';
import Cart from './components/Cart'
import Footer from './components/Footer';
import Register from './components/Register';
import Login from './components/Login';
import { useState } from 'react';

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [cartItems, setCartItems] = useState([]);
  const handleShowRegister = () => {setCurrentView('register');};
  const handleShowHome = () => {setCurrentView('home');};
  const handleShowLogin = () => {setCurrentView('login');};
  const handleShowCart = () => {setCurrentView('cart');};
  

return (
<div>
  <Narvar onRegisterClick={handleShowRegister} onHomeClick={handleShowHome} onLoginClick={handleShowLogin} onCartClick={handleShowCart}/>
  {currentView === 'home' && <Home/>}
  {currentView === 'register' && <Register/>}
  {currentView === 'login' && <Login/>}
  {currentView === 'cart' && <Cart/>}
  <Footer/>
</div>
);
}
export default App;