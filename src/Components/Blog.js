import React, { useState } from "react";
import { Link } from "react-router-dom";
import food1 from "../Images/food1.jpg";
import food2 from "../Images/food2.jpg";
import food3 from "../Images/food3.jpg";
import gym1 from "../Images/gym1.jpg";
import gym2 from "../Images/gym2.jpg";
import gym3 from "../Images/gym3.jpg";
import tech1 from "../Images/tech1.jpg";
import tech2 from "../Images/tech2.jpg";
import tech3 from "../Images/tech3.png";
import travel1 from "../Images/travel1.jpg";
import travel2 from "../Images/travel2.jpg";
import travel3 from "../Images/travel3.jpg";

export default function Blog() {
  const [showThirdColumn, setShowThirdColumn] = useState(false);
  const [moreArticles, setMoreArticles] = useState(true);
  const [contentToShow, setContentToShow] = useState(null);

  const handleReadMoreClick = (content) => {
    setContentToShow(content);
    setShowThirdColumn(true);
  };

  const handleMoreArticlesClick = () => {
    setMoreArticles(true);
    setShowThirdColumn(false);
    setContentToShow(null);
  };

  return (
    <div className="bg-my-image bg-no-repeat bg-cover w-full h-full">
      <div className="md:container md:mx-auto">
        <div className="">
          <div className="text-gray font-pacifico logo">blog</div>
          <div className="flex justify-center">
            <ul class="nav pl-10 font-rubik flex justify-center items-center">
              <li className="nav-item ">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/food">
                  Food
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/travel">
                  Travel
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology">
                  Technology
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/workout">
                  Exercise
                </Link>
              </li>
              <li className="nav-item rounded-r-lg bg-rose-500 shadow-lg shadow-gray p-2 text-sm text-white">
                Log In
              </li>
            </ul>
          </div>
          <input
            type="search"
            className="rounded-full p-3 px-10 mx-auto block text-sm my-20 border-2 border-rose-500 outline-none animate-bounce"
            placeholder="Read about..."
          />
        </div>
        <div className="flex justify-center h-screen overflow-hidden">
          {moreArticles && (
            <div className="bg-gradient-to-t font-rubik from-red-300 to-lime-200 rounded-lg border ps-8 pr-4 shadow-inner shadow-black overflow-y-auto no-scrollbar w-1/3">
              <div className="">
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
                      onClick={() => handleReadMoreClick("tech")}
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
                    <div className="font-bold text-x">
                      Benefits of healthy food
                    </div>
                    <div className="text-sm">
                      This is going to be a paragraph snipet
                    </div>
                    <button
                      className="rounded-r-lg bg-rose-500 shadow-lg shadow-gray p-2 text-sm text-white my-6"
                      onClick={() => handleReadMoreClick("food")}
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
                      Roaming Renegades: Tales of Adventure, Culture, and
                      Discovery
                    </div>
                    <div className="text-sm">
                      This is going to be a paragraph snipet
                    </div>
                    <button
                      className="rounded-r-lg bg-rose-500 shadow-lg shadow-gray p-2 text-sm text-white my-6"
                      onClick={() => handleReadMoreClick("travel")}
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
                      onClick={() => handleReadMoreClick("travel")}
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
          {showThirdColumn && (
            <div className="bg-gradient-to-t font-rubik from-red-300 to-lime-200 rounded-lg border ps-8 pr-4 shadow-inner shadow-black overflow-y-auto no-scrollbar w-1/3">
              <div className="basis-1/4">
                <div class="flex flex-col ...">
                  {contentToShow === "tech" && (
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
                        Vestibulum euismod, mauris ut tincidunt vestibulum,
                        ligula libero volutpat nisi, vitae gravida enim nisl id
                        nisi. Duis malesuada erat eu risus hendrerit, sed
                        sagittis lectus pulvinar. Proin et mauris et velit
                        feugiat vestibulum.
                      </div>
                      <img
                        src={tech3}
                        alt="story"
                        className="size-40 my-7 stretched-image rounded-md shadow-md shadow-gray-500"
                      />
                      <div className="text-sm leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vestibulum euismod, mauris ut tincidunt vestibulum,
                        ligula libero volutpat nisi, vitae gravida enim nisl id
                        nisi. Duis malesuada erat eu risus hendrerit, sed
                        sagittis lectus pulvinar. Proin et mauris et velit
                        feugiat vestibulum.
                      </div>
                      <button
                        className="rounded-r-lg bg-rose-500 shadow-lg shadow-gray p-2 text-sm text-white my-6"
                        onClick={handleMoreArticlesClick}
                      >
                        More Articles
                      </button>
                    </div>
                  )}
                  {contentToShow === "food" && (
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
                        Vestibulum euismod, mauris ut tincidunt vestibulum,
                        ligula libero volutpat nisi, vitae gravida enim nisl id
                        nisi. Duis malesuada erat eu risus hendrerit, sed
                        sagittis lectus pulvinar. Proin et mauris et velit
                        feugiat vestibulum.
                      </div>
                      <img
                        src={food3}
                        alt="story"
                        className="size-40 my-7 stretched-image rounded-md shadow-md shadow-gray-500"
                      />
                      <div className="text-sm leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vestibulum euismod, mauris ut tincidunt vestibulum,
                        ligula libero volutpat nisi, vitae gravida enim nisl id
                        nisi. Duis malesuada erat eu risus hendrerit, sed
                        sagittis lectus pulvinar. Proin et mauris et velit
                        feugiat vestibulum.
                      </div>
                      <button
                        className="rounded-r-lg bg-rose-500 shadow-lg shadow-gray p-2 text-sm text-white my-6"
                        onClick={handleMoreArticlesClick}
                      >
                        More Articles
                      </button>
                    </div>
                  )}
                  {contentToShow === "travel" && (
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
                        Vestibulum euismod, mauris ut tincidunt vestibulum,
                        ligula libero volutpat nisi, vitae gravida enim nisl id
                        nisi. Duis malesuada erat eu risus hendrerit, sed
                        sagittis lectus pulvinar. Proin et mauris et velit
                        feugiat vestibulum.
                      </div>
                      <img
                        src={travel3}
                        alt="story"
                        className="size-40 my-7 stretched-image rounded-md shadow-md shadow-gray-500"
                      />
                      <div className="text-sm leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vestibulum euismod, mauris ut tincidunt vestibulum,
                        ligula libero volutpat nisi, vitae gravida enim nisl id
                        nisi. Duis malesuada erat eu risus hendrerit, sed
                        sagittis lectus pulvinar. Proin et mauris et velit
                        feugiat vestibulum.
                      </div>
                      <button
                        className="rounded-r-lg bg-rose-500 shadow-lg shadow-gray p-2 text-sm text-white my-6"
                        onClick={handleMoreArticlesClick}
                      >
                        More Articles
                      </button>
                    </div>
                  )}
                  {contentToShow === "gym" && (
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
                        Vestibulum euismod, mauris ut tincidunt vestibulum,
                        ligula libero volutpat nisi, vitae gravida enim nisl id
                        nisi. Duis malesuada erat eu risus hendrerit, sed
                        sagittis lectus pulvinar. Proin et mauris et velit
                        feugiat vestibulum.
                      </div>
                      <img
                        src={gym3}
                        alt="story"
                        className="size-40 my-7 stretched-image rounded-md shadow-md shadow-gray-500"
                      />
                      <div className="text-sm leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vestibulum euismod, mauris ut tincidunt vestibulum,
                        ligula libero volutpat nisi, vitae gravida enim nisl id
                        nisi. Duis malesuada erat eu risus hendrerit, sed
                        sagittis lectus pulvinar. Proin et mauris et velit
                        feugiat vestibulum.
                      </div>
                      <button
                        className="rounded-r-lg bg-rose-500 shadow-lg shadow-gray p-2 text-sm text-white my-6"
                        onClick={handleMoreArticlesClick}
                      >
                        More Articles
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
