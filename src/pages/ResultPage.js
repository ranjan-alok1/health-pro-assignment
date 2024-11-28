import React from 'react';
import './ResultPage.css';
import BackgroundSVG from "../assets/overlay.svg";
import ForegroundSVG from "../assets/couple.svg";
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';

const ResultPage = () => {
  const successRate = 64; // This can be dynamic

  // Function to check screen size

  return (
    <div className="result-page">
      <Navbar />
      <div className="main-content">
        <div className="breadcrumb">
          <span>Home</span>
          <span>/</span>
          <span>IVF Success Rate Calculator</span>
          <span>/</span>
          <span className="current">Result</span>
        </div>

        <div className='mobileNav'>
          <span>
            <ArrowLeft className='arrow-left' />
            <span>IVF Success Rate Calculator</span>
          </span>
        </div>

        <div className="title-container">
          <div className="line-dot">
            <div className="line"></div>
            <div className="dot"></div>
          </div>
          <h1>Your estimated IVF Success Rate is</h1>
        </div>

        <div className="success-rate-container">
          <div className="circle-outer">
            <div className="circle-progress" style={{ '--progress': `${successRate}%` }}>
              <div className="circle-inner">
                <span className="percentage">{successRate}%</span>
              </div>
            </div>
          </div>
          <p className="cycle-text">With 1 IVF Cycle</p>
        </div>

        <div className="svg-container">
          <img src={BackgroundSVG} alt="Background" className="svg-back" />
          <img src={ForegroundSVG} alt="Foreground" className="svg-front" />
        </div>

          <div className="consultation-button mobile-only">
            <button>
              Start private consultation
              <ArrowRight className="arrow-icon" />
            </button>
          </div>
      </div>
    </div>
  );
};

export default ResultPage;
