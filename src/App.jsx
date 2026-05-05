import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        {/* Можеш додати спільний хедер тут */}
        <header className="main-header">
          <h2>Укрзалізниця Квитки</h2>
        </header>

        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Шлях для 10-ї лабораторної */}
            <Route path="/booking/:trainId" element={<div>Сторінка бронювання </div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;