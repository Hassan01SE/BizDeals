import './App.css';
import LandingPage from './components/pages/Landing';
import NavHead from './components/pages/NavHead';
import { useEffect } from 'react';

function App() {

  useEffect(() => {

    document.title = "BizDeals";

  }, [])




  return (
    <div className="App">
      <div className="app-content">
        <NavHead />
        <LandingPage />
      </div>
    </div>
  );
}

export default App;
