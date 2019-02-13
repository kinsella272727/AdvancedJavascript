import React, { Component } from "react";

import "./index.css";
import axios from "axios";

import Book from "./Components/Book";
import SearchFunction from "./Components/SearchFunction";


class BookGrid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
      sort: 'no',
      searchText: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const key = "AIzaSyDQ-V2kT_xLBdo8fxvyZu72PV4d41dHc1w";
    axios
      .get("https://www.googleapis.com/books/v1/volumes?q=coding&key=" + key)
      .then(response => {
        console.log(response.data.items);
        this.setState({ books: response.data.items });
      })
      .catch(err => {
        console.log(err);
      });
  }

  //The beginning of searching through the API if I had more time
  // fetchNewData() {
  //   const key = "AIzaSyDQ-V2kT_xLBdo8fxvyZu72PV4d41dHc1w";
  //   axios
  //     .get("https://www.googleapis.com/books/v1/volumes?q=${this.state.searchText}&key=" + key)
  //     .then(response => {
  //       console.log(response.data.items);
  //       this.setState({ books: response.data.items });
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }


  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
    console.log(value);
  }

  render() {
    const data = this.state.sort === 'no' ? this.state.books : [].concat(this.state.books)
    .sort((a, b) => {
      if(a.title < b.title) return -1;
      if(a.title > b.title) return 1;
      return 0;
    });

    let bookList = this.state.books.map(b => {

      const titleMatch = b.volumeInfo.title.startsWith(this.state.searchText);
      return titleMatch ? (
        <Book
          key={b.id}
          title={b.volumeInfo.title}
          subtitle={b.volumeInfo.subtitle}
          author={b.volumeInfo.authors}
          description={b.volumeInfo.description}
          image={b.volumeInfo.imageLinks.thumbnail}
        />
      ) : null;

      // return (
      //   <Book
      //     key={b.id}
      //     title={b.volumeInfo.title}
      //     subtitle={b.volumeInfo.subtitle}
      //     author={b.volumeInfo.authors}
      //     description={b.searchInfo.textSnippet}
      //     genre={b.volumeInfo.categories}
      //     image={b.volumeInfo.imageLinks.thumbnail}
      //   />
      // );
    });

    return (
      <div>
        <div className="section">
          <div className="column is-3">
            <SearchFunction
              name="searchText"
              label="Seach by Title:"
              value={this.state.searchText}
              handleChange={this.handleChange}
              placeholder={"e.g. javascript"}
            />
          </div>
          <div className="column is-multiline">{bookList}</div>
        </div>
      </div>
    );
  }
}

export default BookGrid;
