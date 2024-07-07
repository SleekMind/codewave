import React from 'react';
import './LandingPage.css';
import { useNavigate } from "react-router-dom";
function LandingPage() {
    const navigate = useNavigate();
    return (
      
    <div className="landing-container">
      <header className="landing-header">
        <h1>Welcome to CodeWave</h1>
        <p>Your ultimate online code editor</p>
      </header>
      <main className="landing-main">
              <button className="get-started-button"
              onClick={()=>{navigate("/hello");}}>Get Started</button>
      </main>
    </div>
    );
    
}

export default LandingPage;
