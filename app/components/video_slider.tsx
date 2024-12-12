import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface MediaSliderProps {
  media: { type: "video" | "image"; src: string }[];
}

const MediaSlider: React.FC<MediaSliderProps> = ({ media }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const currentMedia = media[currentIndex];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % media.length);
  };

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (currentMedia.type === "image" || !isPlaying) {
      // Auto-slide every second for images or paused videos
      timer = setTimeout(nextSlide, 3000);
    }

    return () => clearTimeout(timer);
  }, [isPlaying, currentIndex, currentMedia]);

  useEffect(() => {
    if (currentMedia.type === "video" && isPlaying) {
      const videoElement = document.getElementById(
        `video-${currentIndex}`
      ) as HTMLVideoElement;
      videoElement?.play();
    }
  }, [isPlaying, currentMedia, currentIndex]);

  return (
    <div className="relative w-full max-w-3xl mx-auto overflow-hidden">
      <div className="relative w-full h-[300px]">
        <AnimatePresence>
          {media.map((item, index) => (
            index === currentIndex && (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute w-full h-full"
              >
                {item.type === "video" ? (
                  <video
                    id={`video-${index}`}
                    className="w-full h-full object-cover"
                    src={item.src}
                    onEnded={nextSlide}
                    onPause={() => setIsPlaying(false)}
                    onPlay={() => setIsPlaying(true)}
                  />
                ) : (
                  <img
                    className="w-full h-full object-cover"
                    src={item.src}
                    alt={`Slide ${index}`}
                  />
                )}
              </motion.div>
            )
          ))}
        </AnimatePresence>

        {/* Play/Pause Button */}
        {currentMedia.type === "video" && (
          <button
            className="absolute inset-0 w-12 h-12 m-auto bg-gray-700 bg-opacity-50 text-white rounded-full flex items-center justify-center z-10"
            onClick={togglePlayPause}
          >
            {isPlaying ? "||" : "▶"}
          </button>
        )}
      </div>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {media.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-blue-500" : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default MediaSlider;
