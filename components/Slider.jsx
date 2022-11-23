import React, { useState, useEffect, useRef } from "react";
import { AiOutlineVerticalRight, AiOutlineVerticalLeft } from "react-icons/ai";
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

const imgArr2 = [
   "https://cdn-3.expansion.mx/be/96/0407b0894af48a2583f8cffe67fa/mg-8114.jpg",
   "https://ekol.mx/wp-content/uploads/2021/01/hotel-xcaret-mexico-sistema-ekol-mosaicos-venecianos-de-mexico-1-1.jpg",
   "https://www.surfandsunshine.com/wp-content/uploads/2017/12/IMG_6172-2-1140x855.jpg",
    "http://inmobiliare.com/himalaya/wp-content/uploads/2018/04/Hotel-Xcaret_4.jpeg"
];

let count = 0;
let slideInterval;
const Slider = ({imgArr}) => {
    // console.log(imgArr);
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideRef = useRef();

  const removeAnimation = () => {
    // slideRef.current.classList.remove("fade-anim");
  };

  useEffect(() => {
    slideRef.current.addEventListener("animationend", removeAnimation);
    slideRef.current.addEventListener("mouseenter", pauseSlider);
    slideRef.current.addEventListener("mouseleave", startSlider);

    startSlider();
    return () => {
      pauseSlider();
    };
    // eslint-disable-next-line
  }, []);

  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleOnNextClick();
    }, 3000);
  };

  const pauseSlider = () => {
    clearInterval(slideInterval);
  };

  const handleOnNextClick = () => {
    count = (count + 1) % imgArr2.length;
    setCurrentIndex(count);
    // slideRef.current.classList.add("fade-anim");
  };
  const handleOnPrevClick = () => {
    const productsLength = imgArr2.length;
    count = (currentIndex + productsLength - 1) % productsLength;
    setCurrentIndex(count);
    // slideRef.current.classList.add("fade-anim");
  };

  return (
    <>
    {
    isBrowser ? (
      <div ref={slideRef} className="w-full select-none relative">
      <div className="aspect-w-16 aspect-h-9">
        {/* <img src={imgArr[currentIndex].src} alt="" /> */}
        <picture>
          <source srcSet={imgArr2[currentIndex]} type="image/webp" />
          <img className="w-full h-full" src={imgArr2[currentIndex]} alt=''/>
        </picture>
      </div>

      <div className="absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center">
        <button
          className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
          onClick={handleOnPrevClick}
        >
          <AiOutlineVerticalRight size={30} />
        </button>
        <button
          className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
          onClick={handleOnNextClick}
        >
          <AiOutlineVerticalLeft size={30} />
        </button>
      </div>
    </div>
    ) : (
      <div ref={slideRef} className="w-full select-none relative">
      <div className="aspect-w-16 aspect-h-9">
        {/* <img src={imgArr[currentIndex].src} alt="" /> */}
        <picture>
          <source srcSet={imgArr2[currentIndex]} type="image/webp" />
          <img className="w-full h-full" src={imgArr2[currentIndex]} alt=''/>
        </picture>
      </div>

      <div className="absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center">
        <button
          className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
          onClick={handleOnPrevClick}
        >
          <AiOutlineVerticalRight size={30} />
        </button>
        <button
          className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
          onClick={handleOnNextClick}
        >
          <AiOutlineVerticalLeft size={30} />
        </button>
      </div>
    </div>
    )
  } 
  </>
  );
}

export default Slider;