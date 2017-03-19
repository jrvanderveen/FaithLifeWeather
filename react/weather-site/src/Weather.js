import React, { Component, PropTypes } from 'react';
import './Weather.css';

class SearchBar extends React.Component {
  static PropTypes = {
    onPress: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  render() {
    return (
      <div>
        <input type="text" value={this.state.value} placeholder='Enter City...' onChange={this.handleChange} />
        <button type="button" onClick={() => this.props.onPress(this.state.value)}>Go</button>
      </div>
    );
  }
}

export default class Weather extends Component {
  static propTypes={
    currentConditions: PropTypes.shape({
      city: PropTypes.string.isRequired,
      temperature: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      rain: PropTypes.bool.isRequired,
      error: PropTypes.bool.isRequired,
    }).isRequired,
    onPress: PropTypes.func.isRequired,
  };
  render() {
    const { city, temperature, description, rain, error}=this.props.currentConditions;
    return (
      <div className="container body-content">
        <SearchBar
          className="container div-content"
          onPress={this.props.onPress}
        />
      <div className="container div-content col-md-6">
        <div >{city}</div>
        <div className="container temperature"><h1>{temperature}<sup>o</sup></h1></div>
        <div >{description}</div>
      </div>
      {error ?  <br></br> :
                <div className="container img-content">
                  Do I need an umbrella? <span className="bold"> {rain ? 'yes' : 'no'} </span>
                  <br></br>
                  <img className="container img"
                    src={rain ? require('../public/umbrella.png') : require('../public/sunglasses.png')}
                    alt={rain ? 'umbrella' : 'sunglesses'}
                  />
                </div>
      }

      </div>
    );
  }
}
