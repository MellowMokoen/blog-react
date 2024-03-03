import React from "react";
import { Link } from "react-router-dom";
import BlogData from "./BlogData";
import BlogPost from "./BlogPost";

export default function Blog() {
  return (
    <div className="bg-my-image bg-no-repeat bg-cover overflow-hidden py-12 h-screen md:bg-cover">
      <div className="container mx-auto pb-14 bg-white rounded-md">
        <div className="flex">
          {/* First column */}
          <div className="flex flex-col w-1/2 font-rubik">
            <div className="py-10 px-5">
              <ul className="nav justify-content-start">
                <button className="bg-rose-500 px-3 text-white rounded-lg">
                  Log In
                </button>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Technology
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Food
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Exercise
                  </a>
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

          {/* Second column */}
          <div className="flex flex-col justify-center items-center w-1/2">
            <div className="py-10 px-5">
              <div className="bg-white font-rubik rounded-lg border px-10 pb-12 shadow-inner shadow-black overflow-y-auto no-scrollbar h-96 w-full">
                {BlogData.map((post, index) => (
                  <div key={index} className="blog-post">
                    <div className="blog-post-content">
                      <h2 className="text-md mt-4">{post.title}</h2>
                      <button className="btn my-4 bg-rose-400 text-white">
                        Read More
                      </button>
                    </div>
                    <img
                      src={post.img}
                      alt={post.title}
                      className="stretched-image blog-post-image size-32 "
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
