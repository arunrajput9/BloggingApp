import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { actioncreators } from "../state/index";


// This component will use for editing the blog.


export default function Editblog() {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blog);

  const params = useParams();
  const blogid = params.id;

  const found = blogs.find((item) => item.key === blogid);

  const [blog, setBlog] = useState(found);

  const onChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Link to={`/blog/${blogid}`} >
        <button type="button" className="btn btn-link">
          Go Back
        </button>
      </Link>
      <div className="d-flex justify-content-center">
        <div className="card" style={{ width: "40rem", marginTop: "2%" }}>
          <div className="card-body">
            <form>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  name="title"
                  value={blog.title}
                  onChange={onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="Categories">Categories</label>
                <input
                  type="text"
                  className="form-control"
                  id="Categories"
                  name="categories"
                  value={blog.categories}
                  onChange={onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="">Content</label>
                <textarea
                  className="form-control"
                  id="content"
                  name="content"
                  rows="5"
                  value={blog.content}
                  onChange={onChange}
                ></textarea>
              </div>
            </form>
            <div className="container mt-4">
              <div className="row">
                <div className="col">
                  <Link to={`/blog/${blogid}`}>
                    <button
                      className="btn btn-primary form-control btn-block"
                      onClick={() => {
                        dispatch(actioncreators.edit(blogid, blog));
                      }}
                    >
                      Save Changes
                    </button>
                  </Link>
                </div>
                <div className="col">
                  <Link to={`/blog/${blogid}`}>
                    <button className="btn btn-danger form-control  btn-block">
                      Cancel
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
