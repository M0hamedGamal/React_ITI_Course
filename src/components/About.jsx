import React, { Component } from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";

class About extends Component {
  render() {
    return (
      <>
        <h1>About</h1>
        <div className="row">
          <div className="col-3">
            <ul className="list-group">
              <li className="list-group-item">
                <Link to="/about/team">AboutTeam</Link>
              </li>
              <li className="list-group-item">
                <Link to="/about/company">AboutCompany</Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <Outlet />
          </div>
        </div>
      </>
    );
  }
}

export default About;
