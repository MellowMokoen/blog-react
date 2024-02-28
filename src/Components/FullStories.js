import React, { useState } from "react";
import food2 from "../Images/food2.jpg";
import food3 from "../Images/food3.jpg";
import gym2 from "../Images/gym2.jpg";
import gym3 from "../Images/gym3.jpg";
import gym4 from "../Images/gym4.jpg";
import tech2 from "../Images/tech2.jpg";
import tech3 from "../Images/tech3.png";
import travel2 from "../Images/travel2.jpg";
import travel3 from "../Images/travel3.jpg";

export default function FullStories({
  handleMoreArticlesClick,
  showThirdColumn,
}) {
  return (
    <div className="flex flex-row h-screen overflow-hidden">
      {showThirdColumn && (
        <div className="third-column transition delay-300 duration-300 ease-in-out bg-gradient-to-t font-rubik from-red-300 to-lime-200 rounded-lg border ps-8 pr-4 shadow-inner shadow-black overflow-y-auto no-scrollbar w-1/4">
          <div className="basis-1/4">
            <div class="flex flex-col ...">
              <div className="py-10">
                <img
                  src={tech2}
                  alt="story"
                  className="size-40 stretched-image rounded-md shadow-md shadow-gray-500"
                />
                <div className="font-bold text-x py-5">
                  AI Insights: Navigating the Future of Technology
                </div>
                <div className="text-sm leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum euismod, mauris ut tincidunt vestibulum, ligula
                  libero volutpat nisi, vitae gravida enim nisl id nisi. Duis
                  malesuada erat eu risus hendrerit, sed sagittis lectus
                  pulvinar. Proin et mauris et velit feugiat vestibulum.
                </div>
                <img
                  src={tech3}
                  alt="story"
                  className="size-40 my-7 stretched-image rounded-md shadow-md shadow-gray-500"
                />
                <div className="text-sm leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum euismod, mauris ut tincidunt vestibulum, ligula
                  libero volutpat nisi, vitae gravida enim nisl id nisi. Duis
                  malesuada erat eu risus hendrerit, sed sagittis lectus
                  pulvinar. Proin et mauris et velit feugiat vestibulum.
                </div>
                <button
                  className="rounded-r-lg bg-rose-500 shadow-lg shadow-gray p-2 text-sm text-white my-6"
                  onClick={handleMoreArticlesClick}
                >
                  More Articles
                </button>
              </div>
              <div className="py-10">
                <img
                  src={food2}
                  alt="story"
                  className="size-40 stretched-image rounded-md shadow-md shadow-gray-500"
                />
                <div className="font-bold text-x py-5">
                  AI Insights: Navigating the Future of Technology
                </div>
                <div className="text-sm leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum euismod, mauris ut tincidunt vestibulum, ligula
                  libero volutpat nisi, vitae gravida enim nisl id nisi. Duis
                  malesuada erat eu risus hendrerit, sed sagittis lectus
                  pulvinar. Proin et mauris et velit feugiat vestibulum.
                </div>
                <img
                  src={food3}
                  alt="story"
                  className="size-40 my-7 stretched-image rounded-md shadow-md shadow-gray-500"
                />
                <div className="text-sm leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum euismod, mauris ut tincidunt vestibulum, ligula
                  libero volutpat nisi, vitae gravida enim nisl id nisi. Duis
                  malesuada erat eu risus hendrerit, sed sagittis lectus
                  pulvinar. Proin et mauris et velit feugiat vestibulum.
                </div>
                <button
                  className="rounded-r-lg bg-rose-500 shadow-lg shadow-gray p-2 text-sm text-white my-6"
                  onClick={handleMoreArticlesClick}
                >
                  More Articles
                </button>
              </div>
              <div className="py-10">
                <img
                  src={travel2}
                  alt="story"
                  className="size-40 stretched-image rounded-md shadow-md shadow-gray-500"
                />
                <div className="font-bold text-x py-5">
                  AI Insights: Navigating the Future of Technology
                </div>
                <div className="text-sm leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum euismod, mauris ut tincidunt vestibulum, ligula
                  libero volutpat nisi, vitae gravida enim nisl id nisi. Duis
                  malesuada erat eu risus hendrerit, sed sagittis lectus
                  pulvinar. Proin et mauris et velit feugiat vestibulum.
                </div>
                <img
                  src={travel3}
                  alt="story"
                  className="size-40 my-7 stretched-image rounded-md shadow-md shadow-gray-500"
                />
                <div className="text-sm leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum euismod, mauris ut tincidunt vestibulum, ligula
                  libero volutpat nisi, vitae gravida enim nisl id nisi. Duis
                  malesuada erat eu risus hendrerit, sed sagittis lectus
                  pulvinar. Proin et mauris et velit feugiat vestibulum.
                </div>
                <button
                  className="rounded-r-lg bg-rose-500 shadow-lg shadow-gray p-2 text-sm text-white my-6"
                  onClick={handleMoreArticlesClick}
                >
                  More Articles
                </button>
              </div>
              <div className="py-10">
                <img
                  src={gym2}
                  alt="story"
                  className="size-40 stretched-image rounded-md shadow-md shadow-gray-500"
                />
                <div className="font-bold text-x py-5">
                  AI Insights: Navigating the Future of Technology
                </div>
                <div className="text-sm leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum euismod, mauris ut tincidunt vestibulum, ligula
                  libero volutpat nisi, vitae gravida enim nisl id nisi. Duis
                  malesuada erat eu risus hendrerit, sed sagittis lectus
                  pulvinar. Proin et mauris et velit feugiat vestibulum.
                </div>
                <img
                  src={gym3}
                  alt="story"
                  className="size-40 my-7 stretched-image rounded-md shadow-md shadow-gray-500"
                />
                <div className="text-sm leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum euismod, mauris ut tincidunt vestibulum, ligula
                  libero volutpat nisi, vitae gravida enim nisl id nisi. Duis
                  malesuada erat eu risus hendrerit, sed sagittis lectus
                  pulvinar. Proin et mauris et velit feugiat vestibulum.
                </div>
                <button
                  className="rounded-r-lg bg-rose-500 shadow-lg shadow-gray p-2 text-sm text-white my-6"
                  onClick={handleMoreArticlesClick}
                >
                  More Articles
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
