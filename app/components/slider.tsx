import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ImageSliderProps {
  images: string[]; // Array of image URLs
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setTimeout(nextSlide, 2000); // Slide every 1 second
    }
    return () => clearTimeout(timer);
  }, [isPlaying, currentIndex]);

  return (
    <div className="relative rounded-[10px] w-[85vw] mx-auto overflow-hidden">
      {/* Image Slider */}
      <div className="relative w-[full] h-[300px]">
        <AnimatePresence>
          {images.map((src, index) => (
            index === currentIndex && (
              <motion.img
                key={index}
                src={src}
                alt={`Slide ${index}`}
                className="absolute w-full h-full object-cover rounded-[10px]"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              />
            )
          ))}
        </AnimatePresence>

        {/* Play/Pause Button */}
        <button
          className="absolute inset-0 w-12 h-12 m-auto bg-gray-700 bg-opacity-50 text-white rounded-full flex items-center justify-center z-10"
          onClick={togglePlayPause}
        >
          {isPlaying ? "||" : "▶"}
        </button>
      </div>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${
              currentIndex === index ? "bg-gray-200 w-[1.5rem] h-[0.5rem] rounded-[5px] " : "bg-yellow-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
