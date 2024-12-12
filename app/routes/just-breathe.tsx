import { Link } from "@remix-run/react";
import React from "react";
const JustBreathe: React.FC = () => {
  return (
    <>
      <div className="bg-green-50">
        {/* Hereo section */}
        <div className="medHero relative">
          <img
            src="/breath.jpeg"
            alt="calm waters"
            className="max-h-40 w-full md:min-h-48 overflow-hidden object-cover"
          />
          <div className="text  flex flex-col gap-4 items-center absolute top-0 right-14 left-14 my-2 md:my-4">
            <h1 className="font-bold text-xl md:text-3xl text-white">
              Breath Page
            </h1>
            <p className="text-sm text-gray-300 my-2 text-center">
              Practice guided breathing exercises to reduce stress and anxiety
            </p>
            <button className="bg-orange-400 text-white font-semibold rounded-md p-2 text-md mb-4 w-50k">
              Start Now
            </button>
          </div>
        </div>
        {/* Breathing Exercise */}
        <div className="breath-exercises p-12">
          <div className="container-breath flex flex-col gap-4">
            <div className="right-container flex flex-col md:flex-row items-center gap-8">
              <img src="/bth-1.png" alt="Math Exercise" className="" />
              <div className="flex flex-col items-start gap-8  text-green-800 ">
                <h2 className="font-bold text-3xl">Breathing Exercise</h2>
                <p className="text-md">
                  Practice mindful breathing techniques.
                </p>
                <button className="bg-green-800 p-2 w-40 rounded-xl">
                  <Link to="#" className="font-semibold text-md text-white">
                    Start Now
                  </Link>
                </button>
              </div>
            </div>
            <div className="flex flex-col jstify-between gap-8 my-4 items-center md:flex-row text-green-800 ">
              <div className="flex flex-col gap-2 border border-gray-300 rounded-lg">
                <img src="/bth-2.png" alt="Breath Practice" />
                <p className="my-1 mx-1 p-1">Inhale and Exhale</p>
                <span className="mb-1 mx-1 p-1 font-bold">1 mins</span>
              </div>

              <div className="flex flex-col gap-2 border border-gray-300 rounded-lg">
                <img src="/bth-4.png" alt="Breath Practice" />
                <p className="my-1 mx-1 p-1">Box Breathing</p>
                <span className="mb-1 mx-1 p-1 font-bold">3 mins</span>
              </div>

              <div className="flex flex-col gap-2 border border-gray-300 rounded-lg">
                <img src="/bth-3.png" alt="Breath Practice" />
                <p className="my-1 mx-1 p-1">4-7-8 Technique</p>
                <span className="mb-1 mx-1 p-1 font-bold">5 mins</span>
              </div>
            </div>
          </div>
        </div>

        <div className="line border border-gray-200"></div>
        {/* Breathing Exercise Variety */}
        <div className="breath-variety p-12">
          <div className="container-variety flex flex-col items-center md:flex-row gap-8">
            <div className="right-container flex flex-col items-center gap-8">
              <div className="flex flex-col items-start gap-8  text-green-800 ">
                <h2 className="font-bold text-4xl">
                  Breathing Exercises Variety
                </h2>
                <p className="text-md">
                  Choose from a range of breathing techniques to suit your needs
                  and preferences
                </p>
              </div>
            </div>
            <div className="flex flex-col jstify-between gap-4 my-4 items-center md:flex-col text-green-800 md:w-2/4">
              <div className="flex flex-col md:flex-row gap-2 border border-gray-300 rounded-lg">
                <img
                  src="/bth-2.png"
                  alt="Breath Practice"
                  className="md:h-40"
                />
                <div className="flex flex-col p-2">
                  <p className="font-semibold text-2xl">Deep Breathing</p>
                  <span className="text-wrap my-2">
                    Inhale deeply through your nose, hold for a few seconds, and
                    exhale slowly through your mouth.
                  </span>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-2 border border-gray-300 rounded-lg">
                <img
                  src="/bth-3.png"
                  alt="Breath Practice"
                  className="md:h-40"
                />
                <div className="flex flex-col p-2">
                  <p className="font-semibold text-2xl">4-7-8 Technique</p>
                  <span className="text-wrap my-2">
                    Inhale for 4 seconds, hold for 7 seconds, and exhale for 8
                    seconds. Repeat.
                  </span>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4 border border-gray-300 rounded-lg">
                <img
                  src="/bth-4.png"
                  alt="Breath Practice"
                  className="md:h-40"
                />
                <div className="flex flex-col p-2">
                  <p className="font-bold text-2xl">Box Breathing</p>
                  <span className="text-wrap my-2">
                    Inhale for 4 seconds, hold for 4 seconds, exhale for 4
                    seconds, hold for 4 seconds. Repeat.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="line border border-gray-200"></div>

        <div className="customization p-12">
          <div className="flex  flex-col md:flex-row justify-between gap-8 items-center text-green-800  sm:px-8">
            {/* Text Section */}
            <div className=" flex flex-col gap-4  text-start md:w-1/2">
              <h2 className="text-4xl font-bold mb-4">Customization Options</h2>
              <small className="text-gray-400">
                Personalize your breathing exercises
              </small>
            </div>

            {/* Form Section */}
            <form className="md:w-1/2 rounded-lg ">
              <div className="mb-12">
                <label
                  htmlFor="breathpace"
                  className="block text-sm font-bold mb-2"
                >
                  Breathing Pace
                </label>
                <input
                  id="breathpace"
                  type="text"
                  required
                  placeholder="Enter pace in seconds"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div className="mb-12">
                <label
                  htmlFor="duration"
                  className="block text-sm font-bold mb-2"
                >
                  Duration
                </label>
                <input
                  id="duration"
                  type="text"
                  required
                  placeholder="Enter duration in minutes"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div className="mb-12">
                <label
                  htmlFor="bg-sounds"
                  className="block text-sm font-bold mb-2"
                >
                  Background Sounds
                </label>
                <input
                  id="bg-sounds"
                  type=""
                  required
                  placeholder="Select options: Nature, Zen, Calm"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <button
                type="submit"
                className="w-[10rem] bg-green-800 text-white font-bold py-2 px-4 rounded hover:bg-white hover:text-green-800 transition"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default JustBreathe;
