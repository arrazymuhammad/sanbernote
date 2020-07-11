import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./component/template/Header"
import Navbar from "./component/template/Navbar"
import Footer from "./component/template/Footer"


function App() {
  return (
    <div className="app">
      <div className="container">
        <Header />
        <Navbar />
        <Footer />
      </div>
    </div>
  );
}

export default App;
