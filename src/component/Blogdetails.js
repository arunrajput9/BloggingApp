import React,{useState} from "react";
import { useSelector } from "react-redux";
import BlogsItems from "./BlogsItems";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actioncreators } from "../state/index";

// This components will display all the details of the blog post.

export default function Blogdetails() {
  const blogs = useSelector((state) => state.blog);
  const dispatch = useDispatch();

  const params = useParams();
  const blogid = params.id;

  const [like,setLike] = useState(false);

  const myFunction = () => {
    setLike(!like);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-9">
          <Link to="/">
            <button type="button" className="btn btn-link">
              Back to Home
            </button>
          </Link>
        </div>
        <div className="col">
          <ul className="nav">
            <li className="nav-item me-2">
              <i onClick={myFunction} className={ 'fa fa-thumbs-up' } style={{color: like ? 'blue' :'pink'}}></i>
            </li>
            <li className="nav-item">
              <Link to={`/edit/${blogid}`} className="nav-link">
                <button type="button" className="btn btn-outline-danger">
                  Edit
                </button>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <button
                  type="button"
                  className="btn btn-outline-warning"
                  onClick={() => {
                    dispatch(actioncreators.deleteBlog(blogid));
                  }}
                >
                  Delete
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="d-flex justify-content-end"></div>
      {blogs.map((item) => {
        return (
          <div key={item.key}>
            {item.key === blogid && (
              <div>
                <BlogsItems title={item.title} content={item.content} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
