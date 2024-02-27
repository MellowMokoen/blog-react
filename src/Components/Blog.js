import React from "react";

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
            <img src="" alt="story" />
          </div>
          <div className="py-5">
            <div className="font-bold">Title</div>
            <div className="text-xl">
              This is going to be a paragraph snipet
            </div>
            <button>Read more</button>
            <img src="" alt="story" />
          </div>
          <div className="py-5">
            <div className="font-bold">Title</div>
            <div className="text-xl">
              This is going to be a paragraph snipet
            </div>
            <button>Read more</button>
            <img src="" alt="story" />
          </div>
          <div className="py-5">
            <div className="font-bold">Title</div>
            <div className="text-xl">
              This is going to be a paragraph snipet
            </div>
            <button>Read more</button>
            <img src="" alt="story" />
          </div>
        </div>
      </div>
      <div className="basis-1/4">Full story</div>
    </div>
  );
}
