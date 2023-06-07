import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LandingPage from './components/pages/Landing';
import NavHead from './components/pages/partials/NavHead';
import Footer from './components/pages/partials/Footer';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import Cart from './components/pages/Cart';
import Checkout from './components/pages/Checkout';


import { useEffect, useState } from 'react';
import BusinessList from './components/pages/BusinessList';
import BusinessDetail from './components/pages/BusinessDetail';
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import Preloader from './components/pages/Preloader';
import SellPage from './components/pages/SellPage';
import Account from './components/pages/Account';


function App() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000)

    document.title = "BizDeals";

  }, [])




  return (
    <div className="App">

      {loading ?

        <Preloader />
        :



        <div className="app-content">
          <NavHead />
          <Router>
            <Routes>

              <Route path="/" element={<LandingPage />} />
              <Route path="/home" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/businesses/:category" element={<BusinessList />} />
              <Route path="/detail" element={<BusinessDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/sell" element={<SellPage />} />
              <Route path="/account" element={<Account />} />


              <Route path="*" element={<NotFound />} />

            </Routes>
          </Router>

          <Footer />
        </div>

      }
    </div>
  );
}

export default App;
