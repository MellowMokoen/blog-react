import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddPost = () => {
  const [post, setPost] = useState({
    title: "",
    content: "",
    image: "", // State for image URL
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Expanded payload to include the 'added_via_form' boolean
      const payload = {
        title: post.title,
        content: post.content,
        image: post.image, // Include image URL
        added_via_form: true, // Mark the post as added via the form
      };
      await axios.post("http://localhost:5000/api/posts", payload);

      // Redirect and signal to Blog.js to refresh the posts list
      navigate("/", { state: { refresh: true } });
    } catch (error) {
      console.error("Failed to add post:", error);
    }
  };

  return (
    <div className="bg-my-image bg-no-repeat bg-cover py-10 md:bg-cover">
      <div className="container mx-auto my-10 pb-14 bg-white rounded-md">
        <h2 className="text-2xl font-bold mb-5">Add a New Post</h2>
        <form onSubmit={handleSubmit}>
          {/* Title input */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="title"
            >
              Title
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="title"
              type="text"
              placeholder="Post Title"
              name="title"
              value={post.title}
              onChange={handleChange}
            />
          </div>
          {/* Content input */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="content"
            >
              Content
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="content"
              placeholder="Post Content"
              name="content"
              value={post.content}
              onChange={handleChange}
            />
          </div>
          {/* Image URL input */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="image"
            >
              Image URL
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="image"
              type="text"
              placeholder="Image URL"
              name="image"
              value={post.image}
              onChange={handleChange}
            />
          </div>
          <button
            className="bg-rose-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Create Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPost;