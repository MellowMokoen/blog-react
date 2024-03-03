import React from "react";

const BlogPost = ({ title, description, image }) => {
  return (
    <div className="py-10">
      <div className="font-bold text-x">{title}</div>
      <div className="text-sm">{description}</div>
      <img src={image} alt="story" className="size-40 stretched-image" />
    </div>
  );
};

export default BlogPost;
