import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import BlogsItems from "./BlogsItems";

// This is Homepage for the app where the users can see all the blog posts.

export default function Home() {
  const blog = useSelector((state) => state.blog);
  return (
    <>
      <div className="d-flex justify-content-end">
        <Link to="/add">
          <button className="btn btn-success">New Post</button>
        </Link>
      </div>

      <div className="container w-50">
        <div className="row">
          {blog.map((item) => {
            return (
              <div key={item.key} >
                <Link to={`/blog/${item.key}`} style={{ textDecoration: "none" }}>
                  <div className="text-primary mb-4">
                    <BlogsItems title={item.title} content={((item.content).slice(0,61)).concat(" ...")} />
                  </div>
                </Link>
                
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
