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
    navigator.geolocation.getCurrentPosition(
      (position) => {
        getCurrentConditions(position,0)
          .then(currentConditions => {
            this.setState({ currentConditions, loading: false });
          });
      },
      (error) => {
        getCurrentConditions("Bellingahm",1)
          .then(currentConditions => {
            this.setState({ currentConditions, loading: false });
          });
          console.log(error);
      },
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
  }

  handleSubmit = search =>{
    this.setState({loading: true });
    getCurrentConditions(search, 1)
      .then(currentConditions => {
        this.setState({ currentConditions, loading: false });
      });
  }

  render() {
    const { loading, currentConditions} = this.state;

    return (
      <div className="container body-content">
        <NavBar />
        { loading ?
          <div>Loading…</div> :
          <Weather
            currentConditions={currentConditions}
            onPress={this.handleSubmit}
          />
        }
        <Footer />
      </div>
    );
  }
}
