import React from 'react'
import App from './components/App'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from './components/LandingPage';
function RoutingPage() {
  return (
   <BrowserRouter>
        <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/hello" element={<App/>} />
 </Routes>
      </BrowserRouter>
  )
}

export default RoutingPage