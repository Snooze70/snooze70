/* eslint-disable import/no-unresolved */
import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import Card from "~/components/card";
import LargeCard from "~/components/largeCard";
import ImageSlider from "~/components/slider";
import TestimonialCard from "~/components/testimonialCard";

export const meta: MetaFunction = () => {
  return [
    { title: "Snooze" },
    { name: "description", content: "Reduce Stress And Boost Mood With Snooze" },
  ];
};

export default function Index() {
  const imageUrls = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV53Gedj3kBD5aPBivZCiPrqUlH3nSmt4-oDknVdqOKSjYLGzmJIhnyomoSd6lOf5DykA&usqp=CAU",
    "https://png.pngtree.com/thumb_back/fh260/background/20230523/pngtree-art-mountains-wallpapers-of-birds-flying-at-the-mountain-horizon-image_2604765.jpg",
    "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-screen w-full">
        <img
          src="/heros_image.png"
          alt="herosimage"
          className="absolute inset-0 object-cover h-full w-full"
        />
        <div className="absolute inset-0 flex px-[23rem] flex-col items-center justify-center text-white text-center p-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Reduce Stress And Boost Mood With Snooze
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Guided meditations and exercises for mental well-being
          </p>
          <Link to="signup">
            <button className="bg-[#D3AA00] px-4 py-2 rounded text-white text-lg hover:bg-[#c09a00]">
              Try Snooze for free
            </button>
          </Link>
        </div>
      </div>

      <div className="mr-[5rem] ml-[5rem]">
        {/* Image Slider Section */}
        <div className="flex justify-center py-8">
          <div className="w-full max-w-[1200px]">
            <ImageSlider images={imageUrls} />
          </div>
        </div>

        {/* Other Content Section */}
        <div className="pt-10">
          <div className="flex w-[85vw] mx-auto overflow-hidden h-[5rem] pb-32">
            <img
              src="/forest_vegetation.png"
              alt="woman meditating"
              className="w-[5rem] h-[5rem] rounded-[10px]"
            />
            <p className="relative text-3xl text-[#1C5A5A] font-bold pt-6 pl-7">Key Features</p>
          </div>
          <div className="grid grid-cols-3 w-[85vw] mx-auto overflow-hidden py-5">
            <Card
              image="/mindfulness_practice.png"
              title="Meditation"
              subtitle="Practice mindfulness"
            />
            <Card
              image="/breathing_exercise.png"
              title="Breathing exercise"
              subtitle="Relax with deep breaths"
            />
            <Card
              image="/mood_tracking.png"
              title="Mood tracking"
              subtitle="Track your emotional journey"
            />
          </div>
          <div className="pt-5 pb-10">
            <LargeCard
              image="/play_music.png"
              title="Music"
              subtitle="Listen to soothing sounds"
            />
          </div>
          <div className="absolute left-0 m-0 p-0 h-[0.01rem] w-[100vw] bg-gray-200"></div>
          <div className="relative flex w-[95vw] pl-4 place-items-center overflow-hidden pt-9 pb-5">
            <section className="w-1/2 py-8 text-[#1C5A5A]">
              <h2 className="text-3xl font-bold mb-7">Client Testimonials</h2>
              <p className="pb-7">See what our clients have to say</p>
              <u className="font-bold text-xl">Read More</u>
              <div className="flex relative flex-wrap right-[1rem] pt-10">
                <TestimonialCard
                  name="Sarah Smith"
                  image="/Sarah-Smith.png"
                  rating="★★★★★"
                  text="Amazing app for meditation practices"
                />
                <TestimonialCard
                  name="David Johnson"
                  image="/David-Johnson.png"
                  rating="★★★★★"
                  text="Helped me reduce stress and boost focus"
                />
              </div>
            </section>
            <img
              src="/client-image.png"
              alt="client"
              className="w-[1/2] h-[25rem]"
            />
          </div>
        </div>

        {/* "Join Snooze Today" Section */}
        <div className="relative left-[-5rem] bg-[#1C5A5A] w-screen py-10 text-white flex justify-center">
          <div className="w-screen max-w-[1200px] flex justify-between items-start sm:px-8">
            {/* Text Section */}
            <div className="relative w-1/2 top-[45%]">
              <h2 className="text-4xl font-bold mb-4">Join Snooze Today</h2>
              <small className="text-gray-300">
                Create your profile to access all features
              </small>
            </div>

            {/* Form Section */}
            <form className="w-1/2 rounded-lg ">
              <div className="mb-12">
                <label htmlFor="fullname" className="block text-sm font-bold mb-2">
                  Full Name
                </label>
                <input
                  id="fullname"
                  type="text"
                  required
                  placeholder="Enter your fullname"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div className="mb-12">
                <label htmlFor="email" className="block text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div className="mb-12">
                <label
                  htmlFor="password"
                  className="block text-sm font-bold mb-2"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  required
                  placeholder="Enter your password"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div className="mb-12">
                <label
                  htmlFor="confirm-password"
                  className="block text-sm font-bold mb-2"
                >
                  Confirm Password
                </label>
                <input
                  id="confirm-password"
                  type="password"
                  required
                  placeholder="Confirm your password"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <button
                type="submit"
                className="w-[10rem] bg-[#ffffff] text-[#1C5A5A] font-bold py-2 px-4 rounded hover:bg-[#bbbbbb] transition"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
