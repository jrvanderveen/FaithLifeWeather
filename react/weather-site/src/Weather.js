import React, { Component, PropTypes } from 'react';

export default class Weather extends Component {
  static propTypes = {
    currentConditions: PropTypes.shape({
      city: PropTypes.string.isRequired,
      temperature: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
  };

  render() {
    const { city, temperature, description } = this.props.currentConditions;

    return (
      <div className="container">
        <h1>The Weather</h1>
        <div>City: {city}</div>
        <div>Temperature: {temperature}</div>
        <div>Conditions: {description}</div>
      </div>
    );
  }
}
