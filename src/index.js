import React from 'react';
import ReactDOM from 'react-dom/client';
import { Navbar } from './Components/Navbar';
import { Homepage } from './Views/Homepage';
import { Products } from './Views/Tables/Products'; 
import { Footer } from './Components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 

function App(){
  return(
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);