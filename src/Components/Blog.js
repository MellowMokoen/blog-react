import React from "react";
import food1 from "../Images/food1.jpg";
import food2 from "../Images/food2.jpg";
import food3 from "../Images/food3.jpg";
import gym1 from "../Images/gym1.jpg";
import gym2 from "../Images/gym2.jpg";
import gym3 from "../Images/gym3.jpg";
import gym4 from "../Images/gym4.jpg";
import tech1 from "../Images/tech1.jpg";
import tech2 from "../Images/tech2.jpg";
import tech3 from "../Images/tech3.png";
import travel1 from "../Images/travel1.jpg";
import travel2 from "../Images/travel2.jpg";
import travel3 from "../Images/travel3.jpg";

export default function Blog() {
  return (
    <div className="flex flex-row">
      <div className="text-gray">Blog</div>
      <div className="basis-1/2">
        <h1 className="text-7xl py-20 font-bold">
          Best of <span class="block p-7 px-16">the week</span>
        </h1>
        <ul className="flex space-x-10">
          <li className="no-underline hover:underline cursor-pointer">
            Trending
          </li>
          <li className="px-4 no-underline hover:underline cursor-pointer">
            Popular
          </li>
          <li className="px-4 no-underline hover:underline cursor-pointer">
            Latest
          </li>
        </ul>

        <input
          type="search"
          className="rounded-full p-3 my-16 outline outline-2 outline-offset-2"
          placeholder="Read about..."
        />
      </div>
      <div className="basis-1/4">
        <div class="flex flex-col ...">
          <div className="py-5">
            <div className="font-bold">Title</div>
            <div className="text-xl">
              This is going to be a paragraph snipet
            </div>
            <button>Read more</button>
            <img src={tech1} alt="story" />
          </div>
          <div className="py-5">
            <div className="font-bold">Title</div>
            <div className="text-xl">
              This is going to be a paragraph snipet
            </div>
            <button>Read more</button>
            <img src={food1} alt="story" className="size-32" />
          </div>
          <div className="py-5">
            <div className="font-bold">Title</div>
            <div className="text-xl">
              This is going to be a paragraph snipet
            </div>
            <button>Read more</button>
            <img src={travel1} alt="story" />
          </div>
          <div className="py-5">
            <div className="font-bold">Title</div>
            <div className="text-xl">
              This is going to be a paragraph snipet
            </div>
            <button>Read more</button>
            <img src={gym1} alt="story" />
          </div>
        </div>
      </div>
      <div className="basis-1/4">Full story</div>
    </div>
  );
}
