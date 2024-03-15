import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import BlogData from "./BlogData";

const FullStories = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const [dynamicPost, setDynamicPost] = useState(null);

  useEffect(() => {
    const postFromBlogData = BlogData.find(
      (post) => post.id === parseInt(postId)
    );
    if (!postFromBlogData) {
      axios
        .get(`/api/posts/${postId}`)
        .then((response) => {
          setDynamicPost(response.data);
        })
        .catch((error) => {
          console.error("Error fetching post:", error);
        });
    } else {
      setDynamicPost(postFromBlogData);
    }
  }, [postId]);

  const handleDelete = () => {
    // Assuming dynamic posts are deletable and have a backend endpoint
    axios
      .delete(`/api/posts/${postId}`)
      .then(() => {
        navigate("/"); // Redirect to the homepage after deletion
      })
      .catch((error) => {
        console.error("Error deleting post:", error);
      });
  };

  if (!dynamicPost) {
    return <div>No post found</div>;
  }

  return (
    <div className="bg-my-image bg-no-repeat bg-cover py-10 md:bg-cover">
      <div className="container mx-auto pb-14 bg-white rounded-md">
        <div className="font-rubik">
          <div className="flex blog-post">
            <div className="blog-post-content pt-16 flex flex-col w-1/2">
              <h2 className="text-3xl my-4">{dynamicPost.title}</h2>
              <p className="leading-loose">
                {dynamicPost.content || dynamicPost.description}
              </p>
              <Link to="/">
                <button className="bg-rose-500 px-3 my-5 text-white rounded-lg">
                  More Articles
                </button>
              </Link>
              <div className="flex">
                <Link to={`/edit-post/${dynamicPost.id}`}>
                  <button className="bg-rose-500 px-3 text-white rounded-lg">
                    Edit the post
                  </button>
                </Link>

                {/* Assuming Edit functionality might be added later */}
                <button
                  onClick={handleDelete}
                  className="bg-rose-500 px-3 mx-3 text-white rounded-lg"
                >
                  Delete the post
                </button>
              </div>
            </div>
            {dynamicPost.image && (
              <div className="flex flex-col w-1/2">
                <img
                  src={dynamicPost.image}
                  className="w-1/2 mx-auto block pt-16"
                  alt=""
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullStories;
