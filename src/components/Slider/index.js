"use client";
import React, { useState, useRef, useEffect } from 'react';
import Patron1 from '@/img/patron1.jpg';
import Fleche from '@/img/fleche.png';
import { Playfair_Display } from '@next/font/google'

const playfair = Playfair_Display({ subsets: ['latin'], weight: '400' });

const Index = () => {
  const [patternsWeight, setPatternsWeight] = useState(null);
  const [translateX, setTranslateX] = useState(0);
  const sliderRef = useRef(null);
  const totalItems = 25;
  const itemsToShow = 4;
  const itemWidth = patternsWeight - 4;

  const maxTranslateX = -((totalItems - itemsToShow) * itemWidth);

  const moveSlider = (direction) => {
    setTranslateX((prevTranslateX) => {
      let newTranslateX = prevTranslateX + (direction * itemWidth);
      if (newTranslateX > 0) {
        newTranslateX = 0;
      } else if (newTranslateX < maxTranslateX) {
        newTranslateX = maxTranslateX;
      }
      return newTranslateX;
    });
  };

  const handlePrevClick = () => {
    moveSlider(1);
  };

  const handleNextClick = () => {
    moveSlider(-1);
  };

  const sliderStyle = {
    transform: `translateX(${translateX}px)`,
    transition: 'transform 0.3s ease-out',
  };


    useEffect(() => {
       const windowWeight = window.innerWidth;
       setPatternsWeight(windowWeight / 4);

    }, []);

  return (
    <div
      className="flex flex-col items-center justify-center "
    >
      <button
        onClick={handlePrevClick}
        className="absolute left-20 z-10 w-14 bg-thebg p-3 rounded-full opacity-80 hover:opacity-100"
      >
        <img src={Fleche.src} className="rotate-180"></img>
      </button>
      <div
        className="relative overflow-hidden w-full"
      >
        <div
          className="flex"
          style={sliderStyle}
          ref={sliderRef}
        >
          {Array.from({ length: totalItems }).map((_, index) => (
            <div key={index} className="flex justify-center items-center w-full" style={{ minWidth: `${100 / itemsToShow}%` }}>
              <div className="w-[460px] h-[330px] bg-gray-200 flex items-center justify-center">
                <img src={Patron1.src}></img>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={handleNextClick}
        className="absolute right-20 z-10 w-14 bg-thebg p-3 rounded-full opacity-80 hover:opacity-100"
      >
        <img src={Fleche.src}></img>
      </button>
    </div>
  );
};

export default Index;
