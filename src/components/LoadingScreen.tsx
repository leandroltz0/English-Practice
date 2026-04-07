import React, { useState, useEffect } from 'react';
import videoSrc from '../assets/EnglishWeb_LoadingScreen.mp4';

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
          <video
            src={videoSrc}
            autoPlay
            muted
            playsInline
            loop
            className="loading-screen__video"
          />
        </div>
      </div>
    </div>
  );
};
