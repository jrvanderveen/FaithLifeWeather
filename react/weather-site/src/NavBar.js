import React, { Component } from 'react';

export default class NavBar extends Component {
  render() {
    return (
      <div className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <a href="/" className="navbar-brand">CompanyX Weather</a>
          </div>
        </div>
      </div>
    );
  }
}
