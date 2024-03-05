import React from "react";

const BlogPost = ({ id, title, description, image }) => {
  return (
    <div className="blog-post">
      <div className="blog-post-content">
        <div>{id}</div>
        <h2>{title}</h2>
        <p>{description}</p>
        <img src={image} alt={title} className="blog-post-image" />
        <p>{time}</p>
      </div>
    </div>
  );
};

export default BlogPost;
