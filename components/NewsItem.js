import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, desc, imgln, urln, author, date, source } = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "21rem" }}>
          <div style={{display:'flex', justifyContent:'flex-end', position: 'absolute',right:'0'}}>
            <span className="badge rounded-pill bg-warning">
              {source}
            </span>
          </div>
          
          <img 
            src={
              !imgln
                ? "https://images.news18.com/ibnlive/uploads/2022/04/russia-us-space-16492218193x2.png?impolicy=website&width=510&height=356"
                : imgln
            }
            className="card-img-top"
            alt="..."
            style={{ height: "10rem" }}
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{desc}...</p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()} 
              </small>
            </p>
            <a rel="noreferrer" href={urln} className="btn btn-sm btn-success ">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
