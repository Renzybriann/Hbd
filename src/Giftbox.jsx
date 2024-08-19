import React, { useState } from 'react';
import Confetti from 'react-confetti';
import './App.css'; // Import the CSS file for animations

function GiftBox() {
  const [showMessage, setShowMessage] = useState(false);
  const [isOpened, setIsOpened] = useState(false);

  const handleClick = () => {
    setIsOpened(true);
    setTimeout(() => setShowMessage(true), 500); // Delay message reveal
  };

  return (
    <div className="relative flex items-center justify-center h-screen bg-gray-200">
      {showMessage && <Confetti />}
      {showMessage ? (
        <div className="text-4xl font-bold text-center animate-fadeIn">
          Happy Birthday <span className="text-blue-600">Name</span>
        </div>
      ) : (
        <div className="relative flex items-center justify-center">
          <div
            className={`gift-box ${isOpened ? 'open' : ''}`}
            onClick={handleClick}
          >
            <div className="gift-box__lid"></div>
            <div className="gift-box__body"></div>
            <div className="gift-box__bow"></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default GiftBox;
