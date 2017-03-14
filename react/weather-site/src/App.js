import React, { Component } from 'react';
import { getCurrentConditions } from './weather-service';
import NavBar from './NavBar';
import Weather from './Weather';
import Footer from './Footer';
import './App.css';

export default class App extends Component {
  state = {
    loading: true,
    currentConditions: null,
  };

  componentDidMount() {
    getCurrentConditions('Bellingham, WA')
      .then(currentConditions => {
        this.setState({ currentConditions, loading: false });
      });
  }

  render() {
    const { loading, currentConditions } = this.state;

    return (
      <div className="container body-content">
        <NavBar />
        { loading ?
          <div>Loading…</div> :
          <Weather currentConditions={currentConditions} />
        }
        <Footer />
      </div>
    );
  }
}
