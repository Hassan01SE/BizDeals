import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LandingPage from './components/pages/Landing';
import NavHead from './components/pages/partials/NavHead';
import Footer from './components/pages/partials/Footer';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';


import { useEffect } from 'react';
import BusinessList from './components/pages/BusinessList';
import BusinessDetail from './components/pages/BusinessDetail';


function App() {

  useEffect(() => {

    document.title = "BizDeals";

  }, [])




  return (
    <div className="App">
      <div className="app-content">
        <NavHead />
        <Router>
          <Routes>

            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/businesses/:category" element={<BusinessList />} />
            <Route path="/detail" element={<BusinessDetail />} />


            <Route path="*" element={<NotFound />} />

          </Routes>
        </Router>

        <Footer />
      </div>
    </div>
  );
}

export default App;
