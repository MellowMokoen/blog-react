import React, { useState } from "react";
import FullStories from "./FullStories";
import food1 from "../Images/food1.jpg";
import gym1 from "../Images/gym1.jpg";
import tech1 from "../Images/tech1.jpg";
import travel1 from "../Images/travel1.jpg";

export default function Blog() {
  const [showThirdColumn, setShowThirdColumn] = useState(false);
  const [moreArticles, setMoreArticles] = useState(true);

  const handleReadMoreClick = () => {
    setShowThirdColumn(true);
  };

  const handleMoreArticlesClick = () => {
    setMoreArticles(true);
    setShowThirdColumn(false);
  };

  return (
    <div className="flex flex-row h-screen overflow-hidden">
      <div className="text-gray font-pacifico">blog</div>
      <div className="basis-1/2">
        <h1 className="text-7xl py-20 font-bold font-pacifico">
          Best of <span class="block p-7 px-16 font-pacifico">the week</span>
        </h1>
        <ul className="flex space-x-10 text-sm">
          <li className="bg-rose-500 font-rubik rounded-xl p-3 text-white cursor-pointer">
            Trending
          </li>
          <li className="bg-rose-500 font-rubik rounded-xl p-3 text-white px-4 cursor-pointer">
            Popular
          </li>
          <li className="bg-rose-500 font-rubik rounded-xl p-3 text-white px-4 cursor-pointer">
            Latest
          </li>
        </ul>

        <input
          type="search"
          className="rounded-full p-3 px-10 text-sm my-16 border-2 border-rose-500 outline-none animate-bounce"
          placeholder="Read about..."
        />
      </div>
      {moreArticles && (
        <div className="bg-gradient-to-t font-rubik from-red-300 to-lime-200 rounded-lg border ps-8 pr-4 shadow-inner shadow-black overflow-y-auto no-scrollbar w-1/4">
          <div className="basis-1/4">
            <div class="flex flex-col ...">
              <div className="py-10">
                <div className="font-bold  text-x">
                  AI Insights: Navigating the Future of Technology
                </div>
                <div className="text-sm">
                  This is going to be a paragraph snipet
                </div>
                <button
                  className="rounded-r-lg bg-rose-500 shadow-lg shadow-gray p-2 text-sm text-white my-6"
                  onClick={handleReadMoreClick}
                >
                  Read more
                </button>
                <img
                  src={tech1}
                  alt="story"
                  className="size-40 stretched-image"
                />
              </div>
              <div className="py-10">
                <div className="font-bold text-x">Benefits of healthy food</div>
                <div className="text-sm">
                  This is going to be a paragraph snipet
                </div>
                <button
                  className="rounded-r-lg bg-rose-500 shadow-lg shadow-gray p-2 text-sm text-white my-6"
                  onClick={handleReadMoreClick}
                >
                  Read more
                </button>
                <img
                  src={food1}
                  alt="story"
                  className="size-40 stretched-image"
                />
              </div>
              <div className="py-10">
                <div className="font-bold text-x">
                  Roaming Renegades: Tales of Adventure, Culture, and Discovery
                </div>
                <div className="text-sm">
                  This is going to be a paragraph snipet
                </div>
                <button
                  className="rounded-r-lg bg-rose-500 shadow-lg shadow-gray p-2 text-sm text-white my-6"
                  onClick={handleReadMoreClick}
                >
                  Read more
                </button>
                <img
                  src={travel1}
                  alt="story"
                  className="size-40 stretched-image"
                />
              </div>
              <div className="py-5">
                <div className="font-bold text-x">
                  Sweat & Success: Empowering Your Journey to Fitness
                </div>
                <div className="text-sm">
                  This is going to be a paragraph snipet
                </div>
                <button
                  className="rounded-r-lg bg-rose-500 shadow-lg shadow-gray p-2 text-sm text-white my-6"
                  onClick={handleReadMoreClick}
                >
                  Read more
                </button>
                <img
                  src={gym1}
                  alt="story"
                  className="size-40 stretched-image"
                />
              </div>
            </div>
          </div>
        </div>
      )}
      <FullStories
        showThirdColumn={showThirdColumn}
        handleMoreArticlesClick={handleMoreArticlesClick}
      />
    </div>
  );
}
