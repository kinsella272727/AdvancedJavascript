import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import Home from "./Home";
import Contact from "./Contact";
import BookGrid from "../BookGrid.js";

class Main extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <ul className="header">
            <li>
              <Link exact to="/">Home</Link>
            </li>
            <li>
              <Link to="/book">Books Page</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/book" component={BookGrid} />
            <Route path="/contact" component={Contact} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
export default Main;
