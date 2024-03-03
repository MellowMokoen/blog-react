import React from "react";
import { Link } from "react-router-dom";
import BlogData from "./BlogData";
import BlogPost from "./BlogPost"; // Assuming you've created a BlogPost component

export default function Blog() {
  return (
    <div className="bg-my-image bg-no-repeat bg-cover w-full h-full">
      <div className="md:container md:mx-auto">
        {/* Your navigation and search bar code */}

        <div className="flex justify-center h-screen overflow-hidden">
          <div className="bg-gradient-to-t font-rubik from-red-300 to-lime-200 rounded-lg border ps-8 pr-4 shadow-inner shadow-black overflow-y-auto no-scrollbar w-1/3">
            <div className="">
              <div class="flex flex-col ...">
                {BlogData.map((post) => (
                  <Link to={`/fullstory/${post.title}`} key={post.id}>
                    <BlogPost
                      title={post.title}
                      description={post.description}
                      image={post.image}
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
