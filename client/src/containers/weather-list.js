import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import WeatherBox from '../components/weather-box';

class WeatherList extends Component {

  renderWeather(cityData){
    const name = cityData.city.name;

    console.log(cityData);

    let weatherList = [];
    for(let i=0; i<cityData.list.length; i=i+8){
      let data = cityData.list[i];
      weatherList.push(
        <WeatherBox
          key={data.dt}
          timestamp={data.dt}
          min={data.main.temp_min}
          max={data.main.temp_max}
          condition={data.weather[0].main}
          icon={data.weather[0].id}
          />
      );
    }
    return weatherList;
  }

  render () {
    return (
      <div className="weather-list">
        {this.props.weather.map(this.renderWeather)}
      </div>
    );
  }
}

function mapStateToProps({weather}) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);