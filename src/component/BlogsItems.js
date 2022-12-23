import React from "react";

//This componet will work as a templete for displaying the blogs on the webpage.

export default function BlogsItems(props) {
  return (
    <div className="d-flex justify-content-center">
      <div className="card" style={{ width: "60rem" }}>
        <div className="card-header" style={{ fontSize: 30 }}>
          {props.title}
        </div>

        <div className="card-body">
          <p className="text-dark card-text">
            {props.content}
            {props.content.slice(0, 64).indexOf(".", 63) !== -1 && (
              <button type="button" className="btn btn-link" style={{ marginLeft: '.5rem' }} >
                Read More
              </button>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
