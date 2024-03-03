import React from "react";

const BlogPost = ({ title, description, img }) => {
  return (
    <div className="blog-post">
      <div className="blog-post-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <img src={img} alt={title} className="blog-post-image size-20" />
        <button className="btn">Read More</button>
      </div>
    </div>
  );
};

export default BlogPost;
