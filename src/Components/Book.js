import React from "react";

import "./book.css";

//URL - https://react-project-8e835.firebaseapp.com/

class Book extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="section">
          <div className="row columns">
            <div className="column is-one-third">
              <div className="card has-text-centered">
                <div className="card-content">
                  <figure>
                    <img src={this.props.image} alt="Book Cover"/>
                  </figure>
                </div>
                <div className="card-content">
                  <div className="card has-text-centered">
                    <div className="media-content">
                      <p className="title is-3">{this.props.title}</p>
                      <p className="title is-5">{this.props.subtitle}</p>
                      <p className="subtitle is-5">Author: {this.props.author}</p>
                      <p>Genre: {this.props.genre}</p>
                      <p className="subtitle is-4">Description:</p>
                      <p>{this.props.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Book;
