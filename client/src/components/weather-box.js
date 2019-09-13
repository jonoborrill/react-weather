import React, { Component } from 'react';

class WeatherBox extends Component {
  
  render(props) {

    let weatherDate = new Date(this.props.timestamp*1000);
    let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

    return (
      <div className="weather-box" key={this.props.timestamp}>

        <div className="day">{days[weatherDate.getDay()]}</div>

        <div className="temps">
          <div className="temp-min">{Math.round(this.props.min*10)/10}&deg;</div>
          <div className="temp-max">{Math.round(this.props.max*10)/10}&deg;</div>
        </div>
        
        <div className="icon">
          <i className={`wi wi-owm-${this.props.icon}`}></i>
        </div>
        
        <div className="condition">{this.props.condition}</div>

      </div>
    );
  }
}

export default WeatherBox;