import React from "react";
import "../CSS/blogExample.css";

const BlogExample = ({ title, description, src }) => {
  return (
    <div>
      <h4> {title} </h4>
      <img className="blogExample" src={src} />
      <p> {description} </p>
    </div>
  );
};

export default BlogExample;
