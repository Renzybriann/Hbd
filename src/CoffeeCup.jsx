import React, { useState } from 'react';
import { Howl } from 'howler';
import Confetti from 'react-confetti';
import coffeeCupImage from './assets/coffee-cup.png'; // Adjust path if needed
import clickSound from './sounds/click.mp3'; // Adjust path if using public folder
import balloon from './assets/balloon.png'

const sound = new Howl({
  src: [clickSound],
  volume: 1.0,
});

function CoffeeCup() {
  const [showMessage, setShowMessage] = useState(false);
  const [isOpened, setIsOpened] = useState(false);

  const handleClick = () => {
    sound.play(); // Play sound on click
    setIsOpened(true);
    setTimeout(() => setShowMessage(true), 500); // Delay message reveal
  };

  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-gray-200 overflow-hidden p-4 sm:p-8">
      {showMessage && <Confetti />}
      {!showMessage && (
        <>
          <div className="text-lg sm:text-xl font-bold mb-4 animate-fadeIn text-center">
            <div>Click the Cup</div> 
            
          </div>
          <div className="relative flex items-center justify-center cursor-pointer" onClick={handleClick}>
            <img
              src={coffeeCupImage}
              alt="Coffee Cup"
              className={`transition-transform duration-500 ${isOpened ? 'transform scale-110' : ''} w-40 sm:w-60 md:w-80`}
            />
          </div>
        </>
      )}
      {showMessage && (
        <div className="text-4xl sm:text-6xl md:text-8xl font-bold text-center animate-bounce animate-fadeIn">
          <div>Happy Birthday</div> 
          <div className="text-6xl sm:text-8xl md:text-[200px] mt-9 rainbow-text">
            Jalleah!!!
          </div>
          {/* Balloons */}
          <div className="absolute top-20 -left-32 transform -translate-x-1/2 z-10 hidden md:block animate-float">
            <img src={balloon} alt="Balloon" className="w-32 sm:w-48 md:w-64" />
          </div>
          <div className="absolute top-20 -right-32 transform translate-x-1/2 z-10 hidden md:block animate-float">
            <img src={balloon} alt="Balloon" className="w-32 sm:w-48 md:w-64" />
          </div>
        </div>
      )}
    </div>
  );
}

export default CoffeeCup;
