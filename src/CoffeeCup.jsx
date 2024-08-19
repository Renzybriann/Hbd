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
    <div className="relative flex flex-col items-center justify-center h-screen bg-gray-200 overflow-hidden">
      {showMessage && <Confetti />}
      {!showMessage && (
        <>
          <div className="text-xl font-bold mb-4 animate-fadeIn text-center">
            <div>Mahilig ka ba sa kape?</div> 
            <div>Kung oo pindutin mo yung kape</div>
          </div>
          <div className="relative flex items-center justify-center cursor-pointer" onClick={handleClick}>
            <img
              src={coffeeCupImage}
              alt="Coffee Cup"
              className={`transition-transform duration-500 ${isOpened ? 'transform scale-110' : ''}`}
            />
          </div>
        </>
      )}
      {showMessage && (
        <div className="text-9xl font-bold text-center animate-bounce animate-fadeIn">
          <div>Happy Birthday</div> 
          <div className="text-[200px] mt-9 rainbow-text">
            Jalleah!!!
          </div>
           {/* Balloons */}
      <div className="absolute top-40 -left-52 z-10">
        <img src={balloon} alt="Balloon" className="w-80 h-80 " />
      </div>
      <div className="absolute top-40 -right-52 z-10">
        <img src={balloon} alt="Balloon" className="w-80 h-80 " />
      </div>
        </div>
        
      )}
     
    </div>
  );
}

export default CoffeeCup;
