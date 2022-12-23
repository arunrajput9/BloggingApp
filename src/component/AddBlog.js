import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { actioncreators } from "../state/index";
import { useNavigate } from "react-router-dom";

// This is components for adding blog.

export default function AddBlog() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [blog, setBlog] = useState({
    key: "",
    title: "",
    categories: "",
    content: "",
  });

  const [error, setError] = useState(false);

  const onChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    if (blog.title !== "" && blog.categories !== "" && blog.content !== "") {
      dispatch(actioncreators.add(blog));
      navigate("/");
    } else {
      setError(true);
    }
  };

  const onMouseOverCapture=()=>{
    setError(false);
  }

  return (
    <>
      <Link to="/">
        <button type="button" className="btn btn-link">
          Back to Home
        </button>
      </Link>
      {error === true && (
        <div className="alert alert-warning" role="alert">
          Please fill all the required details
        </div>
      )}

      <div className="d-flex justify-content-center" onMouseMove={onMouseOverCapture}>
        <div className="card" style={{ width: "40rem" }}>
          <div className="card-body">
            <form>
              <div className="form-group">
                <label htmlFor="title">Title*</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  name="title"
                  placeholder="Enter Blog Title"
                  maxLength="60"
                  onChange={onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="Categories">Categories*</label>
                <input
                  type="text"
                  className="form-control"
                  id="Categories"
                  name="categories"
                  placeholder="Enter Blog Categories"
                  onChange={onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="">Content*</label>
                <textarea
                  className="form-control"
                  id="content"
                  name="content"
                  rows="5"
                  placeholder="Write Your Thoughts ..."
                  onChange={onChange}
                ></textarea>
              </div>
            </form>
            <div className="container mt-4">
              <div className="row">
                <div className="col">
                  <button
                    className="btn btn-primary form-control btn-block"
                    onClick={() => {
                      handleClick();
                    }}
                  >
                    Submit
                  </button>
                </div>
                <div className="col">
                  <Link to="/">
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
    </>
  );
}
