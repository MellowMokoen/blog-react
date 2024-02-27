import React from "react";

export default function Blog() {
  return (
    <div>
      <div className="text-gray">Blog</div>
      <h1 className="text-7xl py-20 font-bold">
        Best of <span class="block">the week</span>
      </h1>
      <ul className="flex justify-start">
        <li className="px-8 no-underline hover:underline cursor-pointer">
          Trending
        </li>
        <li className="px-8 no-underline hover:underline cursor-pointer">
          Popular
        </li>
        <li className="px-8 no-underline hover:underline cursor-pointer">
          Latest
        </li>
      </ul>

      <input
        type="search"
        className="rounded-full p-3 my-16 outline outline-2 outline-offset-2"
        placeholder="Read about..."
      />
    </div>
  );
}
