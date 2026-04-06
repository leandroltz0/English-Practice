import React, { useState, useEffect } from 'react';
import logoSrc from '../assets/logo.png';

interface LoadingScreenProps {
  onFinished: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onFinished }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2200);

    const finishTimer = setTimeout(() => {
      onFinished();
    }, 2900);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinished]);

  return (
    <div className={`loading-screen ${fadeOut ? 'loading-screen--fade-out' : ''}`}>
      <div className="loading-screen__content">
        <div className="loading-screen__logo-wrapper">
          <img
            src={logoSrc}
            alt="English Lab"
            className="loading-screen__logo"
          />
        </div>
      </div>
    </div>
  );
};
