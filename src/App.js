import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IVFCalculator from './pages/IVFCalculator';
import ResultPage from './pages/ResultPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<IVFCalculator />} />
          <Route path="/result" element={<ResultPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

