import React from "react";
import { Link } from "react-router-dom";

const BlogPost = ({ title, description, image }) => {
  return (
    <div className="blog-post">
      <div className="blog-post-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <img src={image} alt={title} className="blog-post-image" />
        <Link to={`/posts/${id}`}>Read More</Link>
      </div>
    </div>
  );
};

export default BlogPost;
