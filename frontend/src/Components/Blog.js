import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import BlogData from "./BlogData";

export default function Blog() {
  const [apiPosts, setApiPosts] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchApiPosts = async () => {
      try {
        const response = await axios.get("/api/posts");
        // Combining API posts and static BlogData, ensuring API posts are on top
        setApiPosts([...response.data, ...BlogData]);
      } catch (error) {
        console.error("Error fetching posts from API:", error);
      }
    };

    fetchApiPosts();
  }, [location.state]); // React to changes in navigation state to refresh posts

  return (
    <div className="bg-my-image bg-no-repeat bg-cover overflow-hidden py-10 h-screen md:bg-cover">
      <div className="container mx-auto pb-14 bg-white rounded-md">
        <div className="flex">
          <div className="flex flex-col w-1/2 font-rubik">
            <div className="py-10 px-5">
              <ul className="nav justify-content-start">
                <li className="nav-item">
                  <Link to="/add-post">
                    <button className="bg-green-500 px-3 py-1 text-white rounded-lg mr-3">
                      Add a Post
                    </button>
                  </Link>
                </li>
                {/* Additional nav items */}
              </ul>
              {/* Rest of the component */}
            </div>
          </div>

          <div className="flex flex-col w-1/2">
            <div className="py-10 px-5">
              <div className="bg-white font-rubik rounded-lg border px-10 pb-12 shadow-inner shadow-black overflow-y-auto no-scrollbar h-dvh w-full">
                {apiPosts.map((post, index) => (
                  <div key={index} className="blog-post">
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
