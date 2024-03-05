import React from "react";
import { Link } from "react-router-dom";
import BlogData from "./BlogData";

export default function Blog() {
  return (
    <div className="bg-my-image bg-no-repeat bg-cover overflow-hidden py-10 h-screen md:bg-cover">
      <div className="container mx-auto pb-14 bg-white rounded-md">
        <div className="flex">
          <div className="flex flex-col w-1/2 font-rubik">
            <div className="py-10 px-5">
              <ul className="nav justify-content-start">
                <button className="bg-rose-500 px-3 text-white rounded-lg">
                  Log In
                </button>
                <li className="nav-item">
                  <Link to="/posts:id">Travel</Link>
                </li>
                <li className="nav-item">
                  <Link to="/posts/tech">Technology</Link>
                </li>
                <li className="nav-item">
                  <Link to="/posts/food">Food</Link>
                </li>
                <li className="nav-item">
                  <Link to="/posts/gym">Exercise</Link>
                </li>
              </ul>
              <div className="text-5xl font-pacifico py-20">
                Best of the week
              </div>
              <input
                type="search"
                className="rounded-full p-3 px-20 text-sm my-20 border-2 border-black outline-none animate-bounce"
                placeholder="Read about..."
              />
            </div>
          </div>

          <div className="flex flex-col w-1/2">
            <div className="py-10 px-5">
              <div className="bg-white font-rubik rounded-lg border px-10 pb-12 shadow-inner shadow-black overflow-y-auto no-scrollbar h-dvh w-full">
                {BlogData.map((post) => (
                  <div key={post.id} className="blog-post">
                    <div className="blog-post-content">
                      <h2 className="text-md mt-4">{post.title}</h2>
                      <Link to={`/posts/${post.id}`}>
                        <button className="btn my-4 bg-rose-500 text-white">
                          Read More
                        </button>
                      </Link>
                    </div>
                    <img
                      src={post.image}
                      alt={post.title}
                      className="stretched-image pb-10 blog-post-image size-32"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
